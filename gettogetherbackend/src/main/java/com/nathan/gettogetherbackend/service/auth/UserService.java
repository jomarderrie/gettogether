package com.nathan.gettogetherbackend.service.auth;

import com.nathan.gettogetherbackend.dto.UserRegisterDto;
import com.nathan.gettogetherbackend.models.user.User;

import java.util.List;

public interface UserService {
    User register(UserRegisterDto userRegisterDto)  ;
    List<User> getUsers();

    User findUserByEmail(String email);
}
