package com.example.demo.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cart;
import com.example.demo.model.Product;
import com.example.demo.service.CartService;
import com.example.demo.service.ProductService;

import lombok.AllArgsConstructor;

@AllArgsConstructor

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	private CartService cartService;

	@Autowired
	private ProductService productService;

	@ResponseBody
	@GetMapping("/list")
	public List<Product> productList() {
		List<Product> list = productService.getAllProduct();
		return list;
	}

	@PostMapping("/cart")
	public void addToCart(@RequestBody Product product) {
		ModelMapper modelMapper = new ModelMapper();
		Cart cart = modelMapper.map(product, Cart.class);
//		List<Cart> l = cartService.getItemsInCart();
//		if(l == null ) {
//			cartService.insertProduct(cart);
//		}
//		for(int i = 0 ; i < l.size(); i++) {
//			System.out.println("list is "+l.get(i));
//		}
		cartService.insertProduct(cart);
		
	}

	@GetMapping("/GoToCart")
	public List<Cart> GoToCart() {
		List<Cart> list = cartService.getItemsInCart();
		return list;
	}
	
//	@DeleteMapping(path = {"/{id}"})
//	public void deleteCartItem(@PathVariable("id") int id) {
//			Cart deletedProduct = null;
//			deletedProduct = cartService.getProductById(id);
//			cartService.deleteProduct(deletedProduct);
//		}
	
	@GetMapping("/delCart")
	public List<Cart> delCart(@RequestParam("id") int id) {
//		System.out.println(id);
		Cart deletedProduct = null;
		deletedProduct = cartService.getProductById(id);
		cartService.deleteProduct(deletedProduct);
		List<Cart> list = cartService.getItemsInCart();
		return list;
	}
	
	@GetMapping("/updateCart")
	public List<Cart> updateCart(@RequestParam("id")int id, @RequestParam("quantity")int quantity){
		System.out.println("id="+id+"quantity="+quantity);
		Cart prod = null;
		prod = cartService.getProductById(id);
		System.out.println("prod"+prod);
		prod.setQuantity(quantity);
		cartService.insertProduct(prod);
		
		List<Cart> list = cartService.getItemsInCart();
		return list;
	}
}