import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
 
@Component({
  selector: 'app-newaboutbeto',
  templateUrl: './newaboutbeto.component.html',
  styleUrls: ['./newaboutbeto.component.css']
})
export class NewaboutbetoComponent implements OnInit {

  constructor(
    public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - Beto Paredes');

    this.meta.setTag('og:description', 'Beto Paredes is the Founder of the Beto Paredes Family of Companies, and serves as the Executive Director with Jack Zufelt’s DNA Master Course, specializing in the Success Attitude Formula.');
    this.meta.setTag('twitter:description', 'Beto Paredes is the Founder of the Beto Paredes Family of Companies, and serves as the Executive Director with Jack Zufelt’s DNA Master Course, specializing in the Success Attitude Formula.');

    this.meta.setTag('og:keyword', 'Beto Paredes, Business Consultant, Personal Development Coach');
    this.meta.setTag('twitter:keyword', 'Beto Paredes, Business Consultant, Personal Development Coach');

    this.meta.setTag('og:title', 'DNA Of Success - Beto Paredes');
    this.meta.setTag('twitter:title', 'DNA Of Success - Beto Paredes');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }

}
