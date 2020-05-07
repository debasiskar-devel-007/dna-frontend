import { Component, OnInit } from '@angular/core';
// import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    // public meta: MetaService
    ) { window.scrollTo(500, 0); 
  
    // this.meta.setTitle('DNA Of Success - DNA Master Course Login');

    // this.meta.setTag('og:description', 'Log in to the DNA Master Course and unleash your true to potential by identifying the things you desire most and then, achieving them with the highest levels of success, and becoming a true Master of Success.');
    // this.meta.setTag('twitter:description', 'Log in to the DNA Master Course and unleash your true to potential by identifying the things you desire most and then, achieving them with the highest levels of success, and becoming a true Master of Success.');

    // this.meta.setTag('og:keyword', 'DNA Master Course Login, Login DNA Master Course, DNA Of Success Login');
    // this.meta.setTag('twitter:keyword', 'DNA Master Course Login, Login DNA Master Course, DNA Of Success Login');

    // this.meta.setTag('og:title', 'DNA Of Success - DNA Master Course Login');
    // this.meta.setTag('twitter:title', 'DNA Of Success - DNA Master Course Login');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:url','https://www.dnamastercourse.com/');
    //   this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }
 
}
