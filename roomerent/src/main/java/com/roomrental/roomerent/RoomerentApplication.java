package com.roomrental.roomerent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.roomrental.roomerent.entities")
public class RoomerentApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoomerentApplication.class, args);
	}

}
