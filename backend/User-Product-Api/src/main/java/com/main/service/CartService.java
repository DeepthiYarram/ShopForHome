package com.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.dao.CartDao;
import com.main.dao.UserDao;
import com.main.entity.User;

@Service
public class CartService {
	
	@Autowired
	private CartDao cartDao;
	@Autowired
	private UserDao userDao;

}
