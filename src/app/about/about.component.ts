import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - Jack Zufelt');

    this.meta.setTag('og:description', ' Jack Zufelt is a world-renowned success expert. His book, The DNA of Success, catapulted him into the limelight as a celebrity keynote speaker, trainer and business consultant on the national and international scene.');
    this.meta.setTag('twitter:description', ' Jack Zufelt is a world-renowned success expert. His book, The DNA of Success, catapulted him into the limelight as a celebrity keynote speaker, trainer and business consultant on the national and international scene.');

    this.meta.setTag('og:keyword', 'Jack Zufelt, DNA of Success, Personal Development Coach');
    this.meta.setTag('twitter:keyword', 'Jack Zufelt, DNA of Success, Personal Development Coach');

    this.meta.setTag('og:title', 'DNA Of Success - Jack Zufelt');
    this.meta.setTag('twitter:title', 'DNA Of Success - Jack Zufelt');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }

}
