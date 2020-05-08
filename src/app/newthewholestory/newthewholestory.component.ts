import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-newthewholestory',
  templateUrl: './newthewholestory.component.html',
  styleUrls: ['./newthewholestory.component.css']
})
export class NewthewholestoryComponent implements OnInit {

  constructor(
    public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - Our Whole Story');

    this.meta.setTag('og:description', 'Jack Zufelt has had an incredible success story. And he has decided to share his methods to enable others to have their own success stories too. With his value programs, anyone can be successful!!');
    this.meta.setTag('twitter:description', 'Jack Zufelt has had an incredible success story. And he has decided to share his methods to enable others to have their own success stories too. With his value programs, anyone can be successful!!');

    this.meta.setTag('og:keyword', 'Jack Zufelt’s Story, Jack Zufelt’s Success Formula, Jak Zufelt Success Story');
    this.meta.setTag('twitter:keyword', 'Jack Zufelt’s Story, Jack Zufelt’s Success Formula, Jak Zufelt Success Story');

    this.meta.setTag('og:title', 'DNA Of Success - Our Whole Story');
    this.meta.setTag('twitter:title', 'DNA Of Success - Our Whole Story');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }

}
