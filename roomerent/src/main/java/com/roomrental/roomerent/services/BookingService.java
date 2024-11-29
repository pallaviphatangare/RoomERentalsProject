package com.roomrental.roomerent.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roomrental.roomerent.entities.Booking;
import com.roomrental.roomerent.repositories.BookingRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
