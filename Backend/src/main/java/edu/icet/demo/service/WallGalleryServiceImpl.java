package edu.icet.demo.service;


import edu.icet.demo.dto.WallGallery;
import edu.icet.demo.entity.WallGalleryEntity;
import edu.icet.demo.repository.WallGalleryRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WallGalleryServiceImpl implements WallGalleryService{
    private final WallGalleryRepository repository;
    private final ModelMapper mapper;
    @Override
    public void deleteItem(Integer id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Item with ID " + id + " does not exist.");
        }
        repository.deleteById(id);
    }

    @Override
    public Optional<WallGalleryEntity> getItemByIdAndItemCode(Integer id, String itemCode) {
        return repository.findById(id).filter(order -> itemCode.equals(order.getItemCode()));

    }

    @Override
    public List<WallGallery> getAllItem() {
        try {
            return repository.findAll().stream()
                    .map(wallGalleryEntity -> mapper.map(wallGalleryEntity, WallGallery.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            System.err.println("Failed to fetch all items: " + e.getMessage());
            throw new RuntimeException("Failed to fetch items", e);
        }
    }

    @Override
    public void addItem(WallGallery wallGallery) {

        System.out.println("Incoming Order DTO: " + wallGallery);

        try {

            WallGalleryEntity entity = mapper.map(wallGallery, WallGalleryEntity.class);
            System.out.println("Mapped Entity: " + entity);
            repository.save(entity);

        } catch (Exception e) {
            // Log the error if mapping or saving fails
            System.err.println("Mapping or Saving Failed: " + e.getMessage());
            throw e;  // Rethrow the exception after logging
        }
    }

    @Override
    public void updateItem(WallGallery wallGallery) {
        if (wallGallery.getId() == null || !repository.existsById(wallGallery.getId())) {
            throw new IllegalArgumentException("Order with ID " + wallGallery.getId() + " does not exist.");
        }


        // Update the order
        WallGalleryEntity entity = mapper.map(wallGallery, WallGalleryEntity.class);
        repository.save(entity);
    }

    }

