import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-newsuccessgenetics',
  templateUrl: './newsuccessgenetics.component.html',
  styleUrls: ['./newsuccessgenetics.component.css']
})
export class NewsuccessgeneticsComponent implements OnInit {

  constructor(
    public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - Success Genetics');

    this.meta.setTag('og:description', 'Jack Zufelt’s Personal development program is backed by credible science, known as Epigenetics, and demonstrates that achieving success is within your very DNA and contributes to your “Success Genetics”.');
    this.meta.setTag('twitter:description', 'Jack Zufelt’s Personal development program is backed by credible science, known as Epigenetics, and demonstrates that achieving success is within your very DNA and contributes to your “Success Genetics”.');

    this.meta.setTag('og:keyword', 'Success Genetics Courses, Jack Zufelt’s DNA of Success, Jack Zufelt’s Success Genetics Courses');
    this.meta.setTag('twitter:keyword', 'Success Genetics Courses, Jack Zufelt’s DNA of Success, Jack Zufelt’s Success Genetics Courses');

    this.meta.setTag('og:title', 'DNA Of Success - Success Genetics');
    this.meta.setTag('twitter:title', 'DNA Of Success - Success Genetics');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }

}
