package com.roomrental.roomerent.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.roomrental.roomerent.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}
