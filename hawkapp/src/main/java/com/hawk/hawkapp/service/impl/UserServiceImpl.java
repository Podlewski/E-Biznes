package com.hawk.hawkapp.service.impl;

import com.hawk.hawkapp.model.User;
import com.hawk.hawkapp.repository.UserRepository;
import com.hawk.hawkapp.service.intf.UserService;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
public class UserServiceImpl extends BaseServiceImpl<UserRepository, User>
        implements UserService {

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        super(userRepository);
    }

    @Override
    public User add(User user) {
        LocalDate birthDate = user.getBirthDate().toLocalDateTime().toLocalDate();
        LocalDate now = new Timestamp(System.currentTimeMillis()).toLocalDateTime().toLocalDate();

        if (Period.between(birthDate, now).getYears() < 16) {
            throw new IllegalArgumentException();
        }

        return super.add(user);
    }
}
