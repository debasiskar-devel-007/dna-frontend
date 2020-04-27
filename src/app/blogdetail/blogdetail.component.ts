import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
 

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  constructor(public meta: MetaService) { window.scrollTo(500, 0); 
    this.meta.setTitle('DNA Of Success - Blogs');

    this.meta.setTag('og:description', 'Description: Latest Blogs, News and Articles on the Personal Development Industry by top experts. Stay updated with everything that is happening in the industry and participate in discussions with top professionals.');
    this.meta.setTag('twitter:description', 'Description: Latest Blogs, News and Articles on the Personal Development Industry by top experts. Stay updated with everything that is happening in the industry and participate in discussions with top professionals.');

    this.meta.setTag('og:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');
    this.meta.setTag('twitter:keyword', 'DNA of Success Blogs, DNA Performance Blogs, Blogs on Personal Development');

    this.meta.setTag('og:title', 'DNA Of Success - Blogs');
    this.meta.setTag('twitter:title', 'DNA Of Success - Blogs');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
      this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  
  }

  ngOnInit() {
  }

}
