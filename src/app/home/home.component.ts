import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public meta: MetaService,public router:Router) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - The DNA Master Course');

    this.meta.setTag('og:description', 'Jack Zufelt’s The DNA Of Success Master Course to help you identify and overcome barriers using the Success Attitude Formula to achieve success at the high levels you always desired.');
    this.meta.setTag('twitter:description', 'Jack Zufelt’s The DNA Of Success Master Course to help you identify and overcome barriers using the Success Attitude Formula to achieve success at the high levels you always desired.');

    this.meta.setTag('og:keyword', 'Personal Development Course, Success Attitude Formula, DNA of Success');
    this.meta.setTag('twitter:keyword', 'Personal Development Course, Success Attitude Formula, DNA of Success');

    this.meta.setTag('og:title', 'DNA Of Success - The DNA Master Course');
    this.meta.setTag('twitter:title', 'DNA Of Success - The DNA Master Course');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  }

  ngOnInit() {
  }
  learnproduct(value:any){
    // console.log(value);
    this.router.navigateByUrl('/products/'+value)
  }
}
