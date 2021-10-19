package com.nathan.gettogetherbackend.service.auth;

import com.nathan.gettogetherbackend.dto.UserRegisterDto;
import com.nathan.gettogetherbackend.exception.user.EmailExistException;
import com.nathan.gettogetherbackend.models.user.User;

import java.util.List;

public interface UserService {
    User register(UserRegisterDto userRegisterDto) throws EmailExistException;
    List<User> getUsers();

    User findUserByEmail(String email);
}
