import { Component,NgZone } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerSpport } from '../../../model/CustomerSupport';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-customer-suport',
  imports: [NavigationBarComponent, FooterComponent ,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './customer-suport.component.html',
  styleUrl: './customer-suport.component.css'
})
export class CustomerSuportComponent {
public customerSupport: CustomerSpport = new CustomerSpport("", "", "", false,"");

constructor(private http: HttpClient) {
}
sendMessage() {
  this.customerSupport.solveIt = false;
  this.http
    .post('http://localhost:8080/customer-support/save-customer-support', this.customerSupport, {
      responseType: 'text', // Ensures the response is treated as plain text
    })
    .subscribe(
      (response) => {
        alert(response); // Display the success message from the server
        this.customerSupport = new CustomerSpport('', '', '', false, '');
      },
      (error) => {
        console.error('Error:', error); // Log the error to the console for debugging
        alert(
          'Failed to send the message. Please ensure the server is running and try again.'
        );
      }
    );
}
onSubmit(form: any) {
  if (form.valid) {
    this.sendMessage();
  } else {
    alert('Please fill all required fields.');
  }
}



}
