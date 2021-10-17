package com.nathan.gettogetherbackend.exception.user;

public class UsernameExistException extends Exception {
    public UsernameExistException(String message) {
        super(message);
    }
}
