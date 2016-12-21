   var websocket;
    
    function createWebSocket( OnMessage ){
    
	var url = "?username=root&topic=all";//get_url();
    
    	
      if ('WebSocket' in window) {
            websocket = new WebSocket("ws://"+document.location.host+"/webSocketServer" + url );
      } else if ('MozWebSocket' in window) {
            websocket = new WebSocket("ws://"+document.location.host+"/webSocketServer" + url );
      } else {
      	 websocket = new WebSocket("ws://"+document.location.host+"/sockjs/webSocketServer" + url );
      }
      
      websocket.onopen = function (evnt) {
      	//alert("成功");
      };
      websocket.onmessage =  OnMessage;
      
      websocket.onerror = function (evnt) {
      };
      websocket.onclose = function (evnt) {
      };
    
    }
    
    function subscrible_opr( baseUrl, oid, opr ){
    	
    	var subscrible_url = baseUrl + "/opr/websocketopr";
    	
    	$.ajax({
    		type:     "POST",
    		dataType: "json",
    		data:     {
    			"oid" : oid,
    			"opr" : opr
    		},
    		url:      subscrible_url,
    		
            success : function(result) {
            },
            
            error : function(response) {
                alert("open/close error.");
            }
    	})
    	
    }