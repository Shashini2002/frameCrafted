import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Order } from '../../../model/Order';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-place-order',
  imports: [NavigationBarComponent, FooterComponent, FormsModule, HttpClientModule, CommonModule, RouterLink,NgIf],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  public order: Order = new Order("", "", "", "", "", "", "", "");

  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) {
    this.route.queryParams.subscribe(params => {
      if (params['itemCode']) {
        this.order.itemCode = params['itemCode']; // Assign the item code to the frameName field
      }
      if (params['price']) {
        this.order.price = params['price'];
      }
    });
  }

  placeOrder() {
    // Payment Modal Validation
    const cardNumber = (<HTMLInputElement>document.getElementById("cardNumber")).value;
    const expiryDate = (<HTMLInputElement>document.getElementById("expiryDate")).value;
    const cvv = (<HTMLInputElement>document.getElementById("cvv")).value;
  
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all the payment details (Card Number, Expiry Date, CVV).");
      return; // Exit the method if payment validation fails
    }
  
    // Send the order data to the backend
    this.http.post("http://localhost:8080/order/place-order", this.order).subscribe({
      next: (res: any) => {
        console.log("Success:", res);
        alert(`Order placed successfully! Your Order ID is: ${res.orderId} (You can tarck your order with this order Id..so keep it)`);
        this.displayOrderId(res.orderId); // Call a method to display the Order ID
        this.closePaymentModal();
        this.resetForm();
      },
      error: (err) => {
        console.error("Error:", err);
        alert("Failed to place order.");
      }
    });
  }
  
  displayOrderId(orderId: string) {
    const orderIdElement = document.getElementById("orderIdDisplay");
    if (orderIdElement) {
      orderIdElement.innerText = `Order ID: ${orderId}`;
      orderIdElement.style.display = "block"; // Make sure the element is visible
    }
  }
  
  
  showModal: boolean = false;
  openPaymentModal() {

  // Validate Place Order fields
  if (!this.order.emailAddress || !this.order.phoneNumber || !this.order.address || !this.order.photoUrl) {
    alert('Please fill in all required fields (Email, Phone Number, Address, and Photo URL).');
    return; // Exit the method if validation fails
  }
    this.showModal = true;
    document.getElementById('paymentModal')!.style.display = 'flex';


  
}

closePaymentModal() {
    this.showModal = false;
    document.getElementById('paymentModal')!.style.display = 'none';
}
resetForm() {
  this.order.emailAddress = '';
  this.order.address = '';
  this.order.comment = '';
  this.order.photoUrl = '';
  this.order.phoneNumber = '';

}
  goBack(): void {
    this.location.back();
  }
}
