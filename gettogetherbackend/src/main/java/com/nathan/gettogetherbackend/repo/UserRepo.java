package com.nathan.gettogetherbackend.repo;

import com.nathan.gettogetherbackend.models.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {


    User findUserByEmail(String email);
}
