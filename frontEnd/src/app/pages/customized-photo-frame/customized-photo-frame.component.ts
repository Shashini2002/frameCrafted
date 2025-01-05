import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-customized-photo-frame',
  imports: [NavigationBarComponent,FooterComponent],
  templateUrl: './customized-photo-frame.component.html',
  styleUrl: './customized-photo-frame.component.css'
})
export class CustomizedPhotoFrameComponent {

}
