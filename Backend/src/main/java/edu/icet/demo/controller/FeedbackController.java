package edu.icet.demo.controller;


import edu.icet.demo.dto.CustomerSupport;
import edu.icet.demo.dto.Feedback;
import edu.icet.demo.repository.FeedbackRepository;
import edu.icet.demo.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customer-feedback")
public class FeedbackController {

    private final FeedbackService service;
    private final FeedbackRepository repository;

    @GetMapping("/get-all-feedback")
    public ResponseEntity<List<Feedback>> getAll() {
        List<Feedback> feedbacks = service.getAllFeedback();
        if (feedbacks.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(feedbacks);
        }
        return ResponseEntity.ok(feedbacks);
    }

    @PostMapping("/save-feedback")
    public ResponseEntity<String> addfeedback(@RequestBody Feedback feedback) {
        try {

            service.addCustomerFeedback(feedback);
            return ResponseEntity.ok("Thank you for your valuable Feedback");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }


    }
}
