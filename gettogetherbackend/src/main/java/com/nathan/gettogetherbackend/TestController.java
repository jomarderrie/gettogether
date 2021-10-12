package com.nathan.gettogetherbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/user")
    public String getHello(){
        return "Hello";
    }
}
