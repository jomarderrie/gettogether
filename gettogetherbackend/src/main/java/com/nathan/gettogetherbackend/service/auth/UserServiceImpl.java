package com.nathan.gettogetherbackend.service.auth;

import com.nathan.gettogetherbackend.dto.UserRegisterDto;
import com.nathan.gettogetherbackend.models.user.User;
import com.nathan.gettogetherbackend.models.user.UserPrincipal;
import com.nathan.gettogetherbackend.repo.UserRepo;
import com.nathan.gettogetherbackend.exception.user.*;
import org.junit.platform.commons.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import com.nathan.gettogetherbackend.exception.user.*;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.Date;
import java.util.List;

import static com.nathan.gettogetherbackend.constant.Role.ROLE_USER;
import static com.nathan.gettogetherbackend.constant.UserImplConstant.*;

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserServiceImpl implements UserService, UserDetailsService {
    private Logger LOGGER = LoggerFactory.getLogger(getClass());
    private BCryptPasswordEncoder passwordEncoder;
    private UserRepo userRepository;

    @Autowired
    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email);
        if (user == null) {
            LOGGER.error(NO_USER_FOUND_BY_EMAIL + email);
            throw new UsernameNotFoundException(NO_USER_FOUND_BY_EMAIL + email);
        } else {
            user.setLastLoginDateDisplay(user.getLastLoginDate());
            user.setLastLoginDate(new Date());
            userRepository.save(user);
            UserPrincipal userPrincipal = new UserPrincipal(user);
            LOGGER.info(NO_USER_FOUND_BY_EMAIL + email);
            return userPrincipal;
        }
    }


    @Override
    public User register(UserRegisterDto userRegisterDto) throws EmailExistException {
        User foundUser = validateEmailRegister(userRegisterDto.getEmail());
        if (foundUser != null) {
            User user = new User();
            user.setPassword(userRegisterDto.getPassword());
            user.setFirstName(userRegisterDto.getFirstName());
            user.setLastName(userRegisterDto.getLastName());
            user.setEmail(userRegisterDto.getEmail());
            user.setJoinDate(new Date());
            user.setPassword(encodePassword(userRegisterDto.getPassword()));
            user.setRole(ROLE_USER.name());
            user.setAuthorities(ROLE_USER.getAuthorities());
            userRepository.save(user);
            LOGGER.info("New user : " + userRegisterDto.getEmail());
            return user;
        } else {
            throw new EmailExistException("Email already exists");
        }
    }

    @Override
    public List<User> getUsers() {
        return null;
    }

    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }


    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    private User validateEmailRegister(String newEmail) {
        User userByEmail = findUserByEmail(newEmail);
        if (userByEmail != null) {
            return userByEmail;
        } else {
            return null;
        }
//        if (StringUtils.isNotBlank(currentUsername)) {
//            User currentUser = findUserByUsername(currentUsername);
//            if (currentUser == null) {
//                throw new UserNotFoundException(NO_USER_FOUND_BY_USERNAME + currentUsername);
//            }
//            if (userByNewUsername != null && !currentUser.getId().equals(userByNewUsername.getId())) {
//                throw new UsernameExistException(USERNAME_ALREADY_EXISTS);
//            }
//            if (userByNewEmail != null && !currentUser.getId().equals(userByNewEmail.getId())) {
//                throw new EmailExistException(EMAIL_ALREADY_EXISTS);
//            }
//            return currentUser;
//        } else {
//            if (userByNewUsername != null) {
//                throw new UsernameExistException(USERNAME_ALREADY_EXISTS);
//            }
//            if (userByNewEmail != null) {
//                throw new EmailExistException(EMAIL_ALREADY_EXISTS);
//            }
//            return null;
//        }
    }


}
