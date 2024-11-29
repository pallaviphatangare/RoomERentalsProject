package com.roomrental.roomerent.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roomrental.roomerent.entities.ContactForm;
import com.roomrental.roomerent.repositories.ContactRepository;
@Service
public class ContactFormService {

    @Autowired
    private ContactRepository contactRepository;

    public boolean saveContactForm(ContactForm contactForm) {
        try {
            contactRepository.save(contactForm); 
            return true;
        } catch (Exception e) {
            System.out.println("Error saving contact form: " + e.getMessage());
            return false;
        }
    }
    public List<ContactForm> getAllcontact() {
        return contactRepository.findAll();
    }

}

