import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-landing-page.component.html',
  styleUrl: './new-landing-page.component.css',
})
export class NewLandingPageComponent {}
