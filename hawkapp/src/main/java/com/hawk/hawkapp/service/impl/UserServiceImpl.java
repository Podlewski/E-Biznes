package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.User;
import com.hawk.hawkapp.repository.UserRepository;
import com.hawk.hawkapp.service.intf.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserRepository, User>
        implements UserService {

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        super(userRepository);
    }
}
