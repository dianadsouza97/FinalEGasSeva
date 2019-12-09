package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.repository.CartRepository;
@Service
public class CartServiceImpl implements CartService {
	
	
	private CartRepository cartRepository;
	@Autowired
	public CartServiceImpl(CartRepository cartRepositrory) {
		super();
		this.cartRepository = cartRepositrory;
	}
	@Override
	@Transactional
	public void insertProduct(Cart c) {
		cartRepository.save(c);
	}
	@Override
	public List<Cart> getItemsInCart() {
		// TODO Auto-generated method stub
		return cartRepository.findAll();
	}

	@Override
	@Transactional
	public void deleteProduct(Cart cart) {
		// TODO Auto-generated method stub
		cartRepository.delete(cart);
	}

	@Override
	@Transactional
	public Cart getProductById(int id) {
		// TODO Auto-generated method stub
		Optional<Cart> products = cartRepository.findById(id);
		Cart tempProduct = products.get();
		return tempProduct;
	}
}
