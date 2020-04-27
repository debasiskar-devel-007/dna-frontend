import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
 


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public meta: MetaService) { window.scrollTo(500, 0); 
    this.meta.setTitle('DNA Of Success - Our Products    ');

    this.meta.setTag('og:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');
    this.meta.setTag('twitter:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');

    this.meta.setTag('og:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');
    this.meta.setTag('twitter:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');

    this.meta.setTag('og:title', 'DNA Of Success - Our Products');
    this.meta.setTag('twitter:title', 'DNA Of Success - Our Products');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  
  }

  ngOnInit() {
  }

}
