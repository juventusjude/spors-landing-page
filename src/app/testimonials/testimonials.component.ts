import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  @ViewChild('slickCarousel') slickCarousel!: SlickCarouselComponent;
  slides!: any;
  banners!: any;
  isLoggedin!: boolean;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.banners = [
      {
        image: '../../assets/banners/kicker.svg',
        info: `Trade Your Passion, Profit from Your Team's Success!`,
      },
      {
        image: '../../assets/banners/blazing_ball.svg',
        info: 'Own a Piece of the Action—Invest in Your Team’s Future!',
      },
      {
        image: '../../assets/banners/pitch.png',
        info: 'Fan Power, Team Performance—Your Ticket to Profits!',
      },
      {
        image: '../../assets/banners/bullish.png',
        info: 'Game On! Turn Your Fan Knowledge into Winning Trades',
      },
    ];

    // console.log(this.banners);
  }

  goToNext() {
    this.slickCarousel.slickNext();
  }

  goToPrevious() {
    this.slickCarousel.slickPrev();
  }
}
