package com.roomrental.roomerent.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Main {
	@GetMapping("/")
	public String getAll() {
		return "/index.html";
	}
}
