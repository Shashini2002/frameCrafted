import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digital-oil-painting',
  imports: [NavigationBarComponent,FooterComponent,FormsModule,HttpClientModule,CommonModule,RouterLink],
  templateUrl: './digital-oil-painting.component.html',
  styleUrl: './digital-oil-painting.component.css'
})
export class DigitalOilPaintingComponent  implements OnInit {
  oilPaintingItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchoilPaintingItems();
  }

  fetchoilPaintingItems() {
    this.http.get<any[]>('http://localhost:8080/wall-gallery/get-by-category/2')
      .subscribe(
        (data) => {
          this.oilPaintingItems = data;
          console.log('Fetched Wall Gallery Items:', this.oilPaintingItems);
          this.oilPaintingItems.forEach(item => {
            item.imageUrl = 'data:image/jpeg;base64,' + item.image;  // Set the Base64 image URL
            console.log('Image URL:', item.imageUrl);  // Log image URL to check if it's set correctly
          });
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
  

  
  
}
