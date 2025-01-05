package edu.icet.demo.controller;


import edu.icet.demo.dto.StandardWithGlassFrame;
import edu.icet.demo.dto.WallGallery;
import edu.icet.demo.repository.WallGalleryRepository;
import edu.icet.demo.service.WallGalleryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Content-Type")

@RequiredArgsConstructor
@RequestMapping("/wall-gallery")
public class WallGalleryController {
    private final WallGalleryService service;
    private final WallGalleryRepository repository;

    @GetMapping("/get-all-item")
    public ResponseEntity<List<WallGallery>> getAll() {
        List<WallGallery> wallGalleries = service.getAllItem();
        if (wallGalleries.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(wallGalleries);
        }
        return ResponseEntity.ok(wallGalleries);
    }

    @PostMapping("/add-item")
    public ResponseEntity<String> addItem(@RequestBody WallGallery wallGallery) {
        try {
            service.addItem(wallGallery);
            return ResponseEntity.status(HttpStatus.CREATED).body("item add successful");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete-item/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Integer id) {
        try {
            service.deleteItem(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Item deleted successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/update-item")
    public ResponseEntity<String> updateItem(@RequestBody WallGallery wallGallery) {
        try {
            service.updateItem(wallGallery);
            return ResponseEntity.ok("Item updated successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping("/get-by-category/{categoryId}")
    public ResponseEntity<List<WallGallery>> getItemsByCategory(@PathVariable Integer categoryId) {
        List<WallGallery> wallGalleries = service.getItemsByCategoryId(categoryId);
        if (wallGalleries.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(wallGalleries);
        }
        return ResponseEntity.ok(wallGalleries);
    }

}
