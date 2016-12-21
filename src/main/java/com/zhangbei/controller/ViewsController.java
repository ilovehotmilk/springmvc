package com.zhangbei.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class ViewsController {

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String login() {
        return "login";
    }


    @RequestMapping("/analog")
    public String Analog() {
        return "analog";
    }

    @RequestMapping("/test")
    public String Test() {
        return "test";
    }
}

