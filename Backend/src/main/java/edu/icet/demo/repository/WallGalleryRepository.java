package edu.icet.demo.repository;

import edu.icet.demo.entity.WallGalleryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WallGalleryRepository extends JpaRepository<WallGalleryEntity, Integer> {
    List<WallGalleryEntity> findByCategoryId(Integer categoryId);
}