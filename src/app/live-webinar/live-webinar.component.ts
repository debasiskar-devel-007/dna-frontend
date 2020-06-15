import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-live-webinar',
  templateUrl: './live-webinar.component.html',
  styleUrls: ['./live-webinar.component.css']
})
export class LiveWebinarComponent implements OnInit {
public allproduct: any = [];

  constructor(public cookieService: CookieService, private apiService: ApiService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((response: any) => {
      // console.warn('shop',response);
      this.allproduct = response.shop.result;
      for (const i in this.allproduct) {
        this.allproduct[i].description_html = this.allproduct[i].description.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');
      }
      // console.log(this.allproduct)
    });
  }

}
