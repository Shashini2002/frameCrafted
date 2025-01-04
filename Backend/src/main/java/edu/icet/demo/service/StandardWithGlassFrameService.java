package edu.icet.demo.service;


import edu.icet.demo.dto.StandardWithGlassFrame;

import edu.icet.demo.entity.StandardWithGlassFrameEntity;

import java.util.List;
import java.util.Optional;

public interface StandardWithGlassFrameService {
    void deleteItem(Integer id);
    Optional<StandardWithGlassFrameEntity> getItemByIdAndItemCode(Integer id, String itemCode);


    List<StandardWithGlassFrame> getAllItem();
    void addItem(StandardWithGlassFrame standardWithGlassFrame);

    void updateItem(StandardWithGlassFrame standardWithGlassFrame);
}
