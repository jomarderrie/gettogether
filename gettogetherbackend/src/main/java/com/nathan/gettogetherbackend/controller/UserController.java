package com.nathan.gettogetherbackend.controller;

import com.nathan.gettogetherbackend.dto.UserDto;
import com.nathan.gettogetherbackend.models.user.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = {"/user"})
public class UserController {

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody UserDto user){

    }
}
