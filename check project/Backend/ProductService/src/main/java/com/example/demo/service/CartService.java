package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Cart;

public interface CartService {
	public void insertProduct(Cart c);
	public List<Cart> getItemsInCart();
	public void deleteProduct(Cart cart);
	public Cart getProductById(int id);
	
}
