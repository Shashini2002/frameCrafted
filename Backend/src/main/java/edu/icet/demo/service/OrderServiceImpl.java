package edu.icet.demo.service;

import edu.icet.demo.dto.Order;
import edu.icet.demo.entity.OrderEntity;
import edu.icet.demo.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository repository;
    private final ModelMapper mapper;

    @Override
    public void deleteOrder(Integer id) {
        // Check if order exists before deleting
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Order with ID " + id + " does not exist.");
        }
        repository.deleteById(id);
    }

    @Override
    public List<Order> getAllOrder() {
        // Use Java Streams for cleaner mapping
        return repository.findAll().stream()
                .map(orderEntity -> mapper.map(orderEntity, Order.class))
                .collect(Collectors.toList());
    }



    @Override
    public OrderEntity addOrder(Order order) {
        System.out.println("Incoming Order DTO: " + order);
        try {
            // Map Order DTO to OrderEntity
            OrderEntity entity = mapper.map(order, OrderEntity.class);
            System.out.println("Mapped Entity: " + entity);

            // Save the entity and return the saved entity
            return repository.save(entity);
        } catch (Exception e) {
            System.err.println("Mapping or Saving Failed: " + e.getMessage());
            throw new IllegalArgumentException("Failed to place order: " + e.getMessage(), e);
        }
    }



    @Override
    public void updateOrder(Order order) {
        // Ensure the order exists before updating
        if (order.getId() == null || !repository.existsById(order.getId())) {
            throw new IllegalArgumentException("Order with ID " + order.getId() + " does not exist.");
        }

        // Validate input data
        validateOrder(order);

        // Update the order
        OrderEntity entity = mapper.map(order, OrderEntity.class);
        repository.save(entity);
    }
    @Override
    public Optional<OrderEntity> getOrderByIdAndEmail(Integer id, String email) {
        // Validate the order by ID and email
        return repository.findById(id).filter(order -> email.equals(order.getEmailAddress()));
    }

    private void validateOrder(Order order) {

        if (order.getEmailAddress() == null || order.getEmailAddress().trim().isEmpty()) {
            throw new IllegalArgumentException("Email address cannot be null or empty.");
        }
        if (order.getPhoneNumber() == null || order.getPhoneNumber().trim().isEmpty()) {
            throw new IllegalArgumentException("Phone number cannot be null or empty.");
        }

    }
}
