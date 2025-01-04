package edu.icet.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "standardGlassFrame")
public class StandardWithGlassFrameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String itemCode;

    @Column(nullable = false)
    private String price;

    @Column(nullable = false)
    private String size;
@Lob
    @Column(nullable = false)

    private byte[] image;



}
