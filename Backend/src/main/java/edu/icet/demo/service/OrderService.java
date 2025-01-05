package edu.icet.demo.service;

import edu.icet.demo.dto.Order;
import edu.icet.demo.entity.OrderEntity;

import java.util.List;
import java.util.Optional;

public interface OrderService {
     void deleteOrder(Integer id);
    Optional<OrderEntity> getOrderByIdAndEmail(Integer id, String email);


    List<Order> getAllOrder();
    OrderEntity addOrder(Order order);

    void updateOrder(Order order);
}
