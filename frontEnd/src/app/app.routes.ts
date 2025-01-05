import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TrackingOrderComponent } from './pages/tracking-order/tracking-order.component';
import { CustomerSuportComponent } from './pages/customer-suport/customer-suport.component';
import { CustomerFeedbackComponent } from './pages/customer-feedback/customer-feedback.component';
import { StandradFrameComponent } from './pages/standrad-frame/standrad-frame.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { NgModule } from '@angular/core';
import { WallArtsComponent } from './pages/wall-arts/wall-arts.component';
import { DigitalOilPaintingComponent } from './pages/digital-oil-painting/digital-oil-painting.component';
import { CustomizedPhotoFrameComponent } from './pages/customized-photo-frame/customized-photo-frame.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'tracking', component: TrackingOrderComponent },
  { path: 'customer-support', component: CustomerSuportComponent },
  { path: 'customer-feedback', component: CustomerFeedbackComponent },
  { path: 'standrad-frame', component: StandradFrameComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'wall-arts', component: WallArtsComponent },
  { path: 'oil-painting', component: DigitalOilPaintingComponent },
  { path: 'custormized-frame', component: CustomizedPhotoFrameComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
