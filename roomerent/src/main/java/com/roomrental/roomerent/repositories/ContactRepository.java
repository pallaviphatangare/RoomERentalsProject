package com.roomrental.roomerent.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.roomrental.roomerent.entities.ContactForm;
import com.roomrental.roomerent.entities.User;

@Repository
public interface ContactRepository extends JpaRepository<ContactForm, Long>{
	ContactForm save(ContactForm contactForm);
	
	List<ContactForm> findAll();
}
