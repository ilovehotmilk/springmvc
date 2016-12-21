package com.zhangbei.controller;

import java.util.HashMap;
import java.util.Map;

import com.zhangbei.service.IUserService;
import com.zhangbei.service.impl.UserServiceImpl;
import com.zhangbei.viewBean.LoginBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class AjaxController {


    @Autowired
    @Qualifier("userService")
    private IUserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public
    @ResponseBody
    Map<String, Object> LoginPost(HttpSession session, LoginBean loginBean) {
        Map<String, Object> result = new HashMap<String, Object>();
        try {
            session.setAttribute("username",loginBean.getUsername());
            userService.QueryUser(loginBean);
            result.put("success",true);
            return result;
        }
        catch (Exception ex){
            result.put("success",false);
            return result;
        }
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public
    @ResponseBody
    Map<String, Object> LogoutPost(HttpSession session) {
        Map<String, Object> result = new HashMap<String, Object>();
        session.invalidate();
        result.put("success",true);
        System.out.println("用户退出");
        return result;
    }
}
