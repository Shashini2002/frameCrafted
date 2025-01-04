package edu.icet.demo.service;

import com.mysql.cj.protocol.x.FetchDoneEntity;
import edu.icet.demo.dto.CustomerSupport;
import edu.icet.demo.dto.Feedback;
import edu.icet.demo.entity.CustomerSupportEntity;
import edu.icet.demo.entity.FeedbackEntity;
import edu.icet.demo.repository.CustomerSupportRepository;
import edu.icet.demo.repository.FeedbackRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import edu.icet.demo.entity.FeedbackEntity;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{
    private final FeedbackRepository repository;
    private final ModelMapper mapper;
    @Override
    public List<Feedback> getAllFeedback() {
        return repository.findAll().stream()
                .map(FeedbackEntity->mapper.map(FeedbackEntity,Feedback.class))
                .collect(Collectors.toList());

    }

    @Override
    public void addCustomerFeedback(Feedback feedback) {
        System.out.println("Incoming Order DTO: " + feedback);
        try {
            FeedbackEntity entity = mapper.map(feedback, FeedbackEntity.class);
            System.out.println("Mapped Entity: " + entity);
            repository.save(entity);
        } catch (Exception e) {
            System.err.println("Mapping or Saving Failed: " + e.getMessage());
            throw e;
        }
    }
}
