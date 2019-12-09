package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "data")
public class Product {
	private int product_id;
	private String name;
	private String description;
	private int price;
	private int quantity;
	private String url;
}
