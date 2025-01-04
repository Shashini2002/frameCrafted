import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tracking-order',
  imports: [NavigationBarComponent, FooterComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.css'],
})
export class TrackingOrderComponent {
  orderId: string = '';
  email: string = '';
  showModal: boolean = false;
  showUpdateModal: boolean = false;
  orderDetails: any = { itemCode: '', price: '', status: '', emailAddress: '', phoneNumber: '', address: '', photoUrl: '', comments: '' };
  statuses: string[] = [ 'Pending', 'Processing', 'Delivering', 'Delivered'];
  currentStatusIndex: number = 0;

  constructor(private http: HttpClient) {}

  trackOrder() {
    if (!this.orderId || !this.email) {
      alert('Both Order ID and Email are required!');
      return;
    }

    const payload = {
      orderId: this.orderId,
      email: this.email,
    };

    this.http.post<any>('http://localhost:8080/order/track', payload).subscribe(
      (response) => {
        this.orderDetails = response;
        this.currentStatusIndex = this.statuses.indexOf(response.status);
        this.showModal = true;
      },
      (error) => {
        alert('Invalid Order ID or Email. Please try again.');
      }
    );
  }

  closeModal() {
    this.showModal = false;
    this.orderDetails = { itemCode: '', price: '', status: '', emailAddress: '', phoneNumber: '', address: '', photoUrl: '', comments: '' };
  }

  openUpdateModal() {
    if (this.currentStatusIndex >= 2) {
      alert('Orders in Delivering or Delivered status cannot be updated.');
      return;
    }
    this.orderDetails = { 
      itemCode: this.orderDetails.itemCode,
      price: this.orderDetails.price,
      emailAddress: this.orderDetails.emailAddress || '',  // Use default values if any property is missing
      phoneNumber: this.orderDetails.phoneNumber || '',
      address: this.orderDetails.address || '',
      photoUrl: this.orderDetails.photoUrl || '',
      comments: this.orderDetails.comments || ''
    };
    this.showModal = false;
    this.showUpdateModal = true;
  }

  closeUpdateModal() {
    this.showUpdateModal = false;
  }

  updateOrderDetails() {
   

    const payload = {
      orderId: this.orderId,
      email: this.orderDetails.emailAddress,
      phoneNumber: this.orderDetails.phoneNumber,
      address: this.orderDetails.address,
      photoUrl: this.orderDetails.photoUrl,
      comments: this.orderDetails.comments,
    };

    this.http.put<any>(`http://localhost:8080/order/update-order/${this.orderId}`, payload).subscribe(
      (response) => {
        alert(response.message); 
        this.closeUpdateModal();
      },
      (error) => {
        alert('Failed to update the order. Please ensure the server is running and try again.');
      }
    );
  }

  cancelOrder() {
    if (this.currentStatusIndex >= 2) {
      alert('Orders in Delivering or Delivered status cannot be cancelled.');
      return;
    }

    const confirmCancel = confirm('Are you sure you want to cancel this order?');
    if (confirmCancel) {
      this.http.delete(`http://localhost:8080/order/delete-order/${this.orderId}`).subscribe(
        (response) => {
          alert('Order has been successfully cancelled.');
          this.closeModal();
        },
        (error) => {
          alert('Failed to cancel the order. Please try again.');
        }
      );
    }
  }
}
