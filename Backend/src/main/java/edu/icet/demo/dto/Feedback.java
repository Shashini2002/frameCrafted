package edu.icet.demo.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.w3c.dom.Text;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Feedback {
    private Integer id;
    private String emailAddress;
    private String comment;




}
