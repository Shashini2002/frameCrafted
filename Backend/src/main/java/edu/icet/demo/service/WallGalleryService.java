package edu.icet.demo.service;


import edu.icet.demo.dto.WallGallery;
import edu.icet.demo.entity.WallGalleryEntity;

import java.util.List;
import java.util.Optional;

public interface WallGalleryService {
    void deleteItem(Integer id);
    Optional<WallGalleryEntity> getItemByIdAndItemCode(Integer id, String itemCode);


    List<WallGallery> getAllItem();
    void addItem(WallGallery wallGallery);

    void updateItem(WallGallery wallGallery);

}
