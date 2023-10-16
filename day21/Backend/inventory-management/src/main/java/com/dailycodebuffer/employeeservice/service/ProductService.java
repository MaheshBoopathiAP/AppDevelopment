package com.dailycodebuffer.employeeservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dailycodebuffer.employeeservice.model.Product;
import com.dailycodebuffer.employeeservice.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        return productOptional.orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            updatedProduct.setId(id);
            return productRepository.save(updatedProduct);
        }
        return null; // Product not found
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
