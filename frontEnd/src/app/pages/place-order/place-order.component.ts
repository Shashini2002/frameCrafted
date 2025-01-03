import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { Order } from '../../../model/Order';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-place-order',
  imports: [NavigationBarComponent, FooterComponent,FormsModule,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  public order: Order = new Order("","","","","","","","","1");
  constructor(private http:HttpClient ,private route: ActivatedRoute, private location: Location){
    this.route.queryParams.subscribe(params => {
      if (params['frameName']) {
        this.order.frameName = params['frameName'];
      }
    });
  }

  placeOrder(){
   
    this.http.post("http://localhost:8080/order/place-order",this.order).subscribe(res=>{
      alert("customer added!...");
    })
   
  }

  goBack(): void {
    this.location.back();
  }

}
