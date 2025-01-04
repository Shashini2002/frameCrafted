package edu.icet.demo.service;

import edu.icet.demo.dto.Order;
import edu.icet.demo.dto.StandardWithGlassFrame;
import edu.icet.demo.entity.OrderEntity;
import edu.icet.demo.entity.StandardWithGlassFrameEntity;
import edu.icet.demo.repository.OrderRepository;
import edu.icet.demo.repository.StandardWithGlassFrameRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StandardWithGlassFrameServiceImpl implements StandardWithGlassFrameService {

    private final StandardWithGlassFrameRepository repository;
    private final ModelMapper mapper;
    @Override
    public void deleteItem(Integer id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Item with ID " + id + " does not exist.");
        }
        repository.deleteById(id);
    }

    @Override
    public Optional<StandardWithGlassFrameEntity> getItemByIdAndItemCode(Integer id, String itemCode) {
        return repository.findById(id).filter(order -> itemCode.equals(order.getItemCode()));
    }

    @Override
    public List<StandardWithGlassFrame> getAllItem() {
        try {
            return repository.findAll().stream()
                    .map(standardWithGlassFrameEntity -> mapper.map(standardWithGlassFrameEntity, StandardWithGlassFrame.class))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            System.err.println("Failed to fetch all items: " + e.getMessage());
            throw new RuntimeException("Failed to fetch items", e);
        }
    }


    @Override
    public void addItem(StandardWithGlassFrame standardWithGlassFrame) {
        System.out.println("Incoming Order DTO: " + standardWithGlassFrame);

        try {

            StandardWithGlassFrameEntity entity = mapper.map(standardWithGlassFrame, StandardWithGlassFrameEntity.class);
            System.out.println("Mapped Entity: " + entity);
            repository.save(entity);

        } catch (Exception e) {
            // Log the error if mapping or saving fails
            System.err.println("Mapping or Saving Failed: " + e.getMessage());
            throw e;  // Rethrow the exception after logging
        }
    }


    @Override
    public void updateItem(StandardWithGlassFrame standardWithGlassFrame) {

        if (standardWithGlassFrame.getId() == null || !repository.existsById(standardWithGlassFrame.getId())) {
            throw new IllegalArgumentException("Order with ID " + standardWithGlassFrame.getId() + " does not exist.");
        }


        // Update the order
        StandardWithGlassFrameEntity entity = mapper.map(standardWithGlassFrame, StandardWithGlassFrameEntity.class);
        repository.save(entity);
    }

}
