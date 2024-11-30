package com.roomrental.roomerent.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.roomrental.roomerent.entities.Booking;
import com.roomrental.roomerent.entities.ContactForm;
import com.roomrental.roomerent.entities.User;
import com.roomrental.roomerent.repositories.BookingRepository;
import com.roomrental.roomerent.repositories.ContactRepository;
import com.roomrental.roomerent.services.BookingService;
import com.roomrental.roomerent.services.ContactFormService;
import com.roomrental.roomerent.services.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private BookingService bookingService;
    
    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private ContactRepository contactRepository;
    
    @Autowired
    private ContactFormService contactFormService;

 
    public UserController(UserService userService, BookingService bookingService, 
                          BookingRepository bookingRepository, ContactFormService contactFormService) {
        this.userService = userService;
        this.bookingService = bookingService;
        this.bookingRepository = bookingRepository;
        this.contactFormService = contactFormService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        System.out.println("Received user: " + user);
        userService.saveUser(user);
        return ResponseEntity.ok("Profile saved successfully");
    }

    @PostMapping("/bookings")
    public ResponseEntity<String> bookRoom(@RequestBody Booking bookingRequest) {
        LocalDate checkIn = bookingRequest.getCheckin();
        Booking booking = new Booking();
        booking.setName(bookingRequest.getName());
        booking.setEmail(bookingRequest.getEmail());
        booking.setPhone(bookingRequest.getPhone());
        booking.setAadhar(bookingRequest.getAadhar());
        booking.setCheckin(checkIn);  
        booking.setSpecialRequests(bookingRequest.getSpecialRequests());

        bookingRepository.save(booking);

        return ResponseEntity.ok("Booking successful! We will contact you shortly.");
    }
    
  
    @GetMapping("bookings/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
    
    
    @PostMapping("/contact")
    public ResponseEntity<String> submitForm(@RequestBody ContactForm contactForm) {
        boolean isSaved = contactFormService.saveContactForm(contactForm);  
        
        if (isSaved) {
            return ResponseEntity.ok("Your message has been submitted successfully!");
        } else {
            return ResponseEntity.status(500).body("Failed to submit your message. Please try again.");
        }
    }

    @GetMapping("/contact/all")
    public List<ContactForm> getAllContact() {
        return contactRepository.findAll();
    }

}
