package edu.icet.demo.controller;

import edu.icet.demo.dto.Order;
import edu.icet.demo.dto.StandardWithGlassFrame;
import edu.icet.demo.repository.StandardWithGlassFrameRepository;
import edu.icet.demo.service.StandardWithGlassFrameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/standard-with-glass-frame")
public class StandardWithGlassFrameController {

    private final StandardWithGlassFrameService service;
    private final StandardWithGlassFrameRepository repository;

    @GetMapping("/get-all-item")
    public ResponseEntity<List<StandardWithGlassFrame>> getAll() {
        List<StandardWithGlassFrame> standardWithGlassFrames = service.getAllItem();
        if (standardWithGlassFrames.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(standardWithGlassFrames);
        }
        return ResponseEntity.ok(standardWithGlassFrames);
    }

    @PostMapping("/add-item")
    public ResponseEntity<String> addItem(@RequestBody StandardWithGlassFrame standardWithGlassFrame) {
        try {
            service.addItem(standardWithGlassFrame);
            return ResponseEntity.status(HttpStatus.CREATED).body("item add successful");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete-item/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Integer id) {
        try {
            service.deleteItem(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Order deleted successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/update-item")
    public ResponseEntity<String> updateItem(@RequestBody StandardWithGlassFrame standardWithGlassFrame) {
        try {
            service.updateItem(standardWithGlassFrame);
            return ResponseEntity.ok("Order updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
