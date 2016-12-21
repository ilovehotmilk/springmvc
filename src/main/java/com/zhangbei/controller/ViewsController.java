package com.zhangbei.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class ViewsController {

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String login() {
        System.out.println("访问login");
        return "login";
    }


    @RequestMapping("/analog")
    public String Analog() {
        System.out.println("访问analog");
        return "analog";
    }

    @RequestMapping("/test")
    public String Test() {
        System.out.println("访问test");
        return "test";
    }
}

