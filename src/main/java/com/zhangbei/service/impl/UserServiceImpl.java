package com.zhangbei.service.impl;

import com.zhangbei.mapper.UserMapper;
import com.zhangbei.model.User;
import com.zhangbei.service.IUserService;
import com.zhangbei.viewBean.LoginBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;


/**
 * Created by lenovo on 2016/12/14.
 */
@Service("userService")
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public void QueryUser(LoginBean loginBean) throws Exception {
        User user=userMapper.selectByUsername(loginBean.getUsername());
        if(user==null)
            throw new Exception("没有此用户");
        else if(!user.getPassword().equals(loginBean.getPassword()))
            throw new Exception("密码错误");
    }
}
