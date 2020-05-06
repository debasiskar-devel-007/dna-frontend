import { Component, OnInit } from '@angular/core';
// import { MetaService } from '@ngx-meta/core';
 

 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    // public meta: MetaService
    ) { window.scrollTo(500, 0); 
    // this.meta.setTitle('DNA Of Success - Contact Us');

    // this.meta.setTag('og:description', 'Get in touch with our support team at the DNA Master Course and we will be happy to answer any questions for you. Learn about our mentorship programs, personal development programs and much more.');
    // this.meta.setTag('twitter:description', 'Get in touch with our support team at the DNA Master Course and we will be happy to answer any questions for you. Learn about our mentorship programs, personal development programs and much more.');

    // this.meta.setTag('og:keyword', 'Contact DNA Of Success, DNA Of Success Contact, Contact DNA Master Course, DNA Master Course Contact');
    // this.meta.setTag('twitter:keyword', 'Contact DNA Of Success, DNA Of Success Contact, Contact DNA Master Course, DNA Master Course Contact');

    // this.meta.setTag('og:title', 'DNA Of Success - Contact Us');
    // this.meta.setTag('twitter:title', 'DNA Of Success - Contact Us');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:url','https://www.dnamastercourse.com/');
    //   this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  
  }

  ngOnInit() {
  }

}
