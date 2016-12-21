package com.zhangbei.websocket;

import com.zhangbei.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.*;
import java.io.IOException;
import java.util.ArrayList;

@Service
public class SystemWebSocketHandler implements WebSocketHandler {
    private static final ArrayList<WebSocketSession> users=new ArrayList<WebSocketSession>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        users.add(session);
        System.out.println("connect to the websocket success......");
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
         //session.sendMessage(message);
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        if(session.isOpen()){
            users.remove(session);
            session.close();
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception {
        System.out.println("websocket connection closed......");
        users.remove(session);
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }

    public void sendMessageToUser(String userName, TextMessage message) {
        for (WebSocketSession user : users) {
            String username=(String) user.getHandshakeAttributes().get("WEBSOCKET_USERNAME");
            if (username!=null&&username.equals(userName)) {
                try {
                    if (user.isOpen()) {
                        System.out.println("WebSocket发送:"+message.toString()+"给用户"+username);
                        user.sendMessage(message);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}