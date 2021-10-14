package org.springframework.controller;

import com.nathan.gettogetherbackend.models.User;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
public class UserControllerTest {
    //methodName_condition_expectedbehaviour
    //given
    //when
    //then
    @Test
    public void postUser_whenUserIsValid_receiveOk(){
        User user = new User();
        user.setFirstName("test");
        user.setFirstName("user");
        user.setPassword("pass1word");
    }


}
