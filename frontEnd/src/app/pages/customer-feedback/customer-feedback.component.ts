import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Feedback } from '../../../model/Feedback';

@Component({
  selector: 'app-customer-feedback',
  imports: [NavigationBarComponent,FooterComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer-feedback.component.html',
  styleUrl: './customer-feedback.component.css'
})
export class CustomerFeedbackComponent implements OnInit {
  public feedback: Feedback = new Feedback('', '');
  public feedbackList: Feedback[] = []; // List to hold feedback data

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit() {
    this.loadFeedback(); // Fetch feedback on component load
  }

  saveFeedback() {
    this.http.post('http://localhost:8080/customer-feedback/save-feedback', this.feedback).subscribe(
      (res) => {
        // Assuming response is successful
        this.ngZone.run(() => {
          alert('Thank you for your valuable Feedback');
        });
      },
      (error) => {
        // Handle HTTP error case
        console.error('Error:', error);
        if (error.status >= 200 && error.status < 300) {
          // If the error is a success status code, treat it as successful
          this.ngZone.run(() => {
            alert('Thank you for your valuable Feedback');
          });
        } else {
          this.ngZone.run(() => {
            alert('Something went wrong. Please try again later.');
          });
        }
      }
    );
  }
  

  loadFeedback() {
    this.http.get<Feedback[]>('http://localhost:8080/customer-feedback/get-all-feedback').subscribe(
      (data) => {
        this.feedbackList = data; // Assign fetched feedback data to the list
      },
      (error) => {
        console.error('Error fetching feedback:', error);
      }
    );
  }
}