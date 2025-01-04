package edu.icet.demo.service;



import edu.icet.demo.dto.Feedback;

import java.util.List;

public interface FeedbackService {
    List<Feedback> getAllFeedback();
    void addCustomerFeedback(Feedback feedback);
}
