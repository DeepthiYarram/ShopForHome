package com.main.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer OrderId;
	
	@OneToOne(targetEntity = User.class,fetch = FetchType.EAGER)
	@JoinColumn(name="userName")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "productId")
	private Product product;

	private Double GrandTotalPrice;
	
	private Integer Quantity;
	
	private Double Total;
	
	private Date orderDate;
	
}
