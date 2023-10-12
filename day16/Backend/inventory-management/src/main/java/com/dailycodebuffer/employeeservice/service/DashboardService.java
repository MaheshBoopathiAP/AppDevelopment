package com.dailycodebuffer.employeeservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dailycodebuffer.employeeservice.model.Product;
import com.dailycodebuffer.employeeservice.repository.*;

import java.util.List;
import java.util.Optional;

@Service
public class DashboardService {

    private final DashboardRepository dashboardRepository;

    @Autowired
    public DashboardService(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;
    }

    public List<Product> getAllProducts() {
        return dashboardRepository.findAll();
    }

    public Product getProductById(Long id) {
        Optional<Product> productOptional = dashboardRepository.findById(id);
        return productOptional.orElse(null);
    }

    public Product createProduct(Product product) {
        return dashboardRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Optional<Product> productOptional = dashboardRepository.findById(id);
        if (productOptional.isPresent()) {
            updatedProduct.setId(id);
            return dashboardRepository.save(updatedProduct);
        }
        return null; // Product not found
    }

    public void deleteProduct(Long id) {
        dashboardRepository.deleteById(id);
    }
}
