package com.nathan.gettogetherbackend.exception.user;

public class EmailExistException extends Exception {
    public EmailExistException(String message) {
        super(message);
    }
}
