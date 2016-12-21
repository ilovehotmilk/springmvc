package com.zhangbei.mqtt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zhangbei.websocket.SystemWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.TextMessage;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * Created by lenovo on 2016/12/19.
 */

public class MqttService {
    @Autowired
    private SystemWebSocketHandler systemWebSocketHandler;
    public void startCase(String message){
        ObjectMapper mapper = new ObjectMapper();
        Map<String,Object> body=new HashMap<String, Object>();
        Map<String,Object> mt=new HashMap<String, Object>();
        Map<String,Object> vals=new HashMap<String, Object>();
        Random rd=new Random();
        vals.put("ps/0", rd.nextFloat()*2);
        vals.put("ps/1", rd.nextFloat()*2);
        vals.put("tp/0", rd.nextFloat()*100);
        vals.put("tp/1", rd.nextFloat()*100);
        mt.put("tm","datetime");
        mt.put("vals",vals);
        body.put("mt",mt);
        String bodyStr="";
        try {
            bodyStr=mapper.writeValueAsString(body);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        String jsonString=String.format("{\"topic\":\"%s\",\"oid\":\"%s\",\"body\":%s}", new Object[]{"dataReport", "20110200005", bodyStr});
        systemWebSocketHandler.sendMessageToUser("root",new TextMessage(jsonString));
        System.out.println("mqttSub:"+message);
    }
}
