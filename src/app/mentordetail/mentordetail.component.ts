import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';
import { FacebookService } from 'ngx-facebook';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-mentordetail',
  templateUrl: './mentordetail.component.html',
  styleUrls: ['./mentordetail.component.css']
})
export class MentordetailComponent implements OnInit {
  public mentordetail: any;
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router, public sanitizer: DomSanitizer,
    public meta: MetaService, public FB: FacebookService) {
    FB.init({
      appId: '679836882810934',
      version: 'v2.9'
    });
  }

  ngOnInit() {
    this.activatedRoute.data.forEach((res: any) => {
      if (res.mentordetail.results.res[0] != null && res.mentordetail.results.res[0].youtube_links != null && res.mentordetail.results.res[0].youtube_links != '') {
        // for (const key in object) {
        res.mentordetail.results.res[0].youtube_links = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + res.mentordetail.results.res[0].youtube_links);
        // }
        this.mentordetail = res.mentordetail.results.res[0];
      } else {
        this.mentordetail = res.mentordetail.results.res[0];
      }

      // this.meta.setTitle(this.blogDetailstData.blogtitle);

      this.meta.setTag('og:description', 'Please review our programs with the DNA Master Course.com and choose a package to get started so we can start working together!');
      this.meta.setTag('twitter:description', 'Please review our programs with the DNA Master Course.com and choose a package to get started so we can start working together!');

      this.meta.setTag('og:keyword', 'DNA Master Course Mentor Profile, Mentor Profile DNA Master Course, DNA Master Course for Mentees');
      this.meta.setTag('twitter:keyword', 'DNA Master Course Mentor Profile, Mentor Profile DNA Master Course, DNA Master Course for Mentees');

      this.meta.setTag('og:title', 'I AM A DNA OF SUCCESS MASTER MENTOR');
      this.meta.setTag('twitter:title', 'I AM A DNA OF SUCCESS MASTER MENTOR');
      this.meta.setTag('og:type', 'website');
      this.meta.setTag('og:url', 'https://dna.influxiq.com' + '/mentordetail/' + this.activatedRoute.snapshot.params._id);
      this.meta.setTag('twitter:url', 'https://dna.influxiq.com' + '/mentordetail/' + this.activatedRoute.snapshot.params._id);

      this.meta.setTag('og:image', this.mentordetail.image);

      this.meta.setTag('twitter:image', this.mentordetail.image);
    });
  }


  safeurl(val) {
    return "https://images.influxiq.com/image.php?url=" + val + "&quality=30";
    // return val
  }

}
