package com.roomrental.roomerent.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String aadhar;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkin;
    private String requests;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAadhar() {
        return aadhar;
    }

    public void setAadhar(String aadhar) {
        this.aadhar = aadhar;
    }

    public LocalDate getCheckin() {
        return checkin;
    }

    public void setCheckin(LocalDate checkin) {
        this.checkin = checkin;
    }

 

    public String getSpecialRequests() {
        return requests;
    }

    public void setSpecialRequests(String requests) {
        this.requests = requests;
    }

	public Booking(Long id, String name, String email, String phone, String aadhar, LocalDate checkin, String requests) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.aadhar = aadhar;
		this.checkin = checkin;
		this.requests = requests;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", aadhar=" + aadhar
				+ ", checkin=" + checkin + ", specialRequests=" + requests + "]";
	}
    
    
}
