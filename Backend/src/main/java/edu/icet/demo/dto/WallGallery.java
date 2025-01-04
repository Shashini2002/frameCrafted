package edu.icet.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class WallGallery {
    private Integer id;
    private String  itemCode;
    private String  itemName;
    private String size;
    private String price;
    private byte[] image;
}
