package edu.icet.demo.dto;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StandardWithGlassFrame {

    private Integer id;
    private String  itemCode;
    private String price;
    private String size;
    private byte[] image;

}
