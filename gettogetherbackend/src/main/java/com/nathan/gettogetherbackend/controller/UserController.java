package com.nathan.gettogetherbackend.controller;

import com.nathan.gettogetherbackend.dto.UserRegisterDto;
import com.nathan.gettogetherbackend.exception.user.EmailExistException;
import com.nathan.gettogetherbackend.exception.user.ExceptionHandling;
import com.nathan.gettogetherbackend.models.user.User;
import com.nathan.gettogetherbackend.models.user.UserPrincipal;
import com.nathan.gettogetherbackend.service.auth.UserService;
import com.nathan.gettogetherbackend.utility.JWTTokenProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping(path = "/user")
public class UserController extends ExceptionHandling {
    private UserService userService;
    private JWTTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> register(@RequestBody UserRegisterDto userRegisterDto) throws EmailExistException {
        User registerUser = userService.register(userRegisterDto);
        UserPrincipal userPrincipal = new UserPrincipal(registerUser);
        HttpHeaders jwtHeader = jwtTokenProvider.getJwtHeader(userPrincipal);
        return new ResponseEntity<User>(registerUser, jwtHeader ,OK);
    }

//    @PostMapping("/login")
//    public ResponseEntity<>
    @GetMapping("/hello")
    @CrossOrigin(origins = "http://localhost:3000")
    public String hello(){
        return "hello!";
    }
}
