import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wall-arts',
  imports: [NavigationBarComponent,FooterComponent,CommonModule,FormsModule,HttpClientModule,RouterLink],
  templateUrl: './wall-arts.component.html',
  styleUrl: './wall-arts.component.css'
})
export class WallArtsComponent implements OnInit {
  wallGalleryItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWallGalleryItems();
  }

  fetchWallGalleryItems() {
    this.http.get<any[]>('http://localhost:8080/wall-gallery/get-by-category/1')
      .subscribe(
        (data) => {
          this.wallGalleryItems = data;
          console.log('Fetched Wall Gallery Items:', this.wallGalleryItems);
          this.wallGalleryItems.forEach(item => {
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