import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-new-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TestimonialsComponent],
  templateUrl: './new-landing-page.component.html',
  styleUrl: './new-landing-page.component.css',
})
export class NewLandingPageComponent {
  openSupport() {
    window.open('https://spox.vercel.app/support', '_blank');
  }

  trade() {
    window.open('https://spox.vercel.app', '_blank');
  }
}
