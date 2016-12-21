package com.zhangbei.websocket;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import javax.servlet.http.HttpSession;
import java.util.Map;

public class WebSocketHandshakeInterceptor implements HandshakeInterceptor {

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        /** 在拦截器内强行修改websocket协议，将部分浏览器不支持的 x-webkit-deflate-frame 扩展修改成 permessage-deflate */
        if(request.getHeaders().containsKey("Sec-WebSocket-Extensions")){
            request.getHeaders().set("Sec-WebSocket-Extensions", "permessage-deflate");
        }
        if (request instanceof ServletServerHttpRequest) {
            ServletServerHttpRequest servletRequest = (ServletServerHttpRequest)request;
            String username = servletRequest.getServletRequest().getParameter("username");
            String topic = servletRequest.getServletRequest().getParameter("topic");
            HttpSession session = servletRequest.getServletRequest().getSession(false);
        if(session!=null&&session.getAttribute("username").equals(username)) {
            System.out.println("与用户"+username+"建立WebSocket连接");
            attributes.put("WEBSOCKET_USERNAME", username);
            attributes.put("WEBSOCKET_TOPIC", topic);
        }
        else
        {
            System.out.println("username:null");
            return false;
        }
      }
      return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {

    }
}
