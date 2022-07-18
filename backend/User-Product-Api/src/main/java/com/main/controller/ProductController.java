package com.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.management.relation.RoleNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.main.dao.ProductDao;
import com.main.entity.Product;
import com.main.helper.CSVHelper;
import com.main.message.ResponseMessage;
import com.main.service.ProductService;

@CrossOrigin("http://localhost:4200")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	@Autowired
	private ProductDao productDao;

	@PostMapping("/addNewProduct")
	public Product addNewProduct(@RequestBody Product product) {
		return productService.addNewProduct(product);

	}

	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
		String message = "";
		if (CSVHelper.hasCSVFormat(file)) {
			try {
				productService.save(file);
				message = "Uploaded the file successfully: " + file.getOriginalFilename();
				return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
			} catch (Exception e) {
				message = "Could not upload the file: " + file.getOriginalFilename() + "!";
				return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
			}
		}
		message = "Please upload a csv file!";
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
	}

	@GetMapping("/getProducts")
	public List<Product> getProductList(Product product) {
		return productService.getProductsList(product);
	}
	
	@GetMapping("/getProduct/{productId}")
	public ResponseEntity<Product> getEmployeeById(@PathVariable Integer productId) {
		Product product = productDao.findById(productId)
				.orElseThrow();
//				.orElseThrow(() -> new ResourceNotFoundException("product not exist with id :" + productId));
		return ResponseEntity.ok(product);
	}
	// update product rest api
	
		@PutMapping("/products/{productId}")
		public ResponseEntity<Product> updateEmployee(@PathVariable Integer productId, @RequestBody Product productdetails){
			Product product = productDao.findById(productId)
					.orElseThrow();
			
			product.setProductName(productdetails.getProductName());
			product.setProductCategory(productdetails.getProductCategory());
			product.setProductDescription(productdetails.getProductDescription());
			product.setProductStock(productdetails.getProductStock());
			product.setProductDiscountedPrice(productdetails.getProductDiscountedPrice());
			product.setProductActualPrice(productdetails.getProductActualPrice());
			
			Product updatedProduct = productDao.save(product);
			return ResponseEntity.ok(updatedProduct);
		}
		
		@DeleteMapping("/deleteProduct/{productId}")
		public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Integer productId){
			Product product = productDao.findById(productId)
					.orElseThrow();
			
			productDao.delete(product);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
