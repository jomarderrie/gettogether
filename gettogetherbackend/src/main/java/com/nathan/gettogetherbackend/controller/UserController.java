package com.nathan.gettogetherbackend.controller;

import com.nathan.gettogetherbackend.dto.UserRegisterDto;
import com.nathan.gettogetherbackend.models.user.User;
import com.nathan.gettogetherbackend.service.auth.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = "/user")
public class UserController {
    private UserService userService;

//    @PostMapping("/register")
//    public ResponseEntity<UserRegisterDto> register(@RequestBody UserRegisterDto userRegisterDto){
//        User registerUser = userService.register(userRegisterDto);
//        return new ResponseEntity<UserRegisterDto>(registerUser, OK);
//    }

    @GetMapping("/hello")
    public String hello(){
        return "hello!";
    }
}
