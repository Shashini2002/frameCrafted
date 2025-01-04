package edu.icet.demo.controller;
import edu.icet.demo.dto.CustomerSupport;


import edu.icet.demo.repository.CustomerSupportRepository;

import edu.icet.demo.service.CustomerSupportService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customer-support")
public class CustomerSupportController {

    private final CustomerSupportService service;
    private final CustomerSupportRepository repository;

    @GetMapping("/get-all-customer-support")
    public ResponseEntity<List<CustomerSupport>> getAll() {
        List<CustomerSupport> customerSupports = service.getAllCustomerSupport();
        if (customerSupports.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(customerSupports);
        }
        return ResponseEntity.ok(customerSupports);
    }
    @PostMapping("/save-customer-support")
    public ResponseEntity<String> addCustomerSupport(@RequestBody CustomerSupport customerSupport) {
        try {
            customerSupport.setSolveIt(false);  // Default value for solve_it
            service.addCustomerSupport(customerSupport);
            return ResponseEntity.ok("message send");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }


    }

    @PutMapping("/update-customer-support")
    public ResponseEntity<String> updateCustomerSupport(@RequestBody CustomerSupport customerSupport) {
        try {
            service.updateCustomerSupport(customerSupport);
            return ResponseEntity.ok("Order updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
