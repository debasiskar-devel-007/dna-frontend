import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-newmentor',
  templateUrl: './newmentor.component.html',
  styleUrls: ['./newmentor.component.css']
})
export class NewmentorComponent implements OnInit {

  constructor(public meta: MetaService) { window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - Mentorship Program');

    this.meta.setTag('og:description', 'Jack Zufelt’s Mentor Program to help you become professional mentors to hundreds and thousands of people around you, and guide them towards achieving incredible success with their Core Desires.');
    this.meta.setTag('twitter:description', 'Jack Zufelt’s Mentor Program to help you become professional mentors to hundreds and thousands of people around you, and guide them towards achieving incredible success with their Core Desires.');

    this.meta.setTag('og:keyword', 'Mentorship Program, Success Programs for Mentors, Jack Zufelt’s Mentor Program ');
    this.meta.setTag('twitter:keyword', 'Mentorship Program, Success Programs for Mentors, Jack Zufelt’s Mentor Program');

    this.meta.setTag('og:title', 'DNA Of Success - Mentorship Program');
    this.meta.setTag('twitter:title', 'DNA Of Success - Mentorship Program');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }

}
