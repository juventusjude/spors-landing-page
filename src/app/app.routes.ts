import { Routes } from '@angular/router';
import { NewLandingPageComponent } from './new-landing-page/new-landing-page.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: NewLandingPageComponent },
  { path: 'learn-more', component: AboutComponent },
];
