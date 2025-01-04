import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule,RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  ngOnInit(): void {
    initFlowbite();
  }
 

  constructor(private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;

        if (fragment) {
          // Scroll to the element with the specified fragment ID
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // Scroll to the top if no fragment is present
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }

 

}
    