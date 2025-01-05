import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { NewDesignComponent } from '../new-design/new-design.component';
import { RouterLink,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-standrad-frame',
  imports: [NavigationBarComponent,FooterComponent,NewDesignComponent,RouterLink,CommonModule],
  templateUrl: './standrad-frame.component.html',
  styleUrl: './standrad-frame.component.css'
})
export class StandradFrameComponent {
  

}