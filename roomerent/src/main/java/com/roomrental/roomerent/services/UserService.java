package com.roomrental.roomerent.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roomrental.roomerent.entities.User;
import com.roomrental.roomerent.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
	public List<User> getAllUsers() {
	        return userRepository.findAll();
	}
}


