import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  currentRoute!: string;

  constructor(private location: Location) {
    this.currentRoute = this.location.path();
  }

  navigateBar(value: string) {
    this.currentRoute = value;
  }
}
