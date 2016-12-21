package com.zhangbei.service;

import com.zhangbei.model.User;
import com.zhangbei.viewBean.LoginBean;
import org.springframework.stereotype.Repository;

/**
 * Created by lenovo on 2016/12/14.
 */
public interface IUserService {

    void QueryUser(LoginBean loginBean) throws Exception;
}
