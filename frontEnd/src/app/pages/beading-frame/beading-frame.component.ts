import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beading-frame',
  imports: [NavigationBarComponent,FooterComponent,HttpClientModule,RouterLink,FormsModule,CommonModule],
  templateUrl: './beading-frame.component.html',
  styleUrl: './beading-frame.component.css'
})
export class BeadingFrameComponent implements OnInit {
  BeadingFrameItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchoilPaintingItems();
  }

  fetchoilPaintingItems() {
    this.http.get<any[]>('http://localhost:8080/wall-gallery/get-by-category/3')
      .subscribe(
        (data) => {
          this.BeadingFrameItems = data;
          console.log('Fetched Wall Gallery Items:', this.BeadingFrameItems);
          this.BeadingFrameItems.forEach(item => {
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
