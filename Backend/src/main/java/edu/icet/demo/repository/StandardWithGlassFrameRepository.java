package edu.icet.demo.repository;


import edu.icet.demo.entity.StandardWithGlassFrameEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StandardWithGlassFrameRepository extends JpaRepository<StandardWithGlassFrameEntity,Integer> {


}
