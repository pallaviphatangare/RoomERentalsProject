package com.roomrental.roomerent.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.roomrental.roomerent.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	 User save(User user);
     
    List<User> findAll();

}
