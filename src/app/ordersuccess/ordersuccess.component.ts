import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit {
  public AllData: any = [];
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((res: any) => {
      console.log(res.successData);
      this.AllData = res.successData;
      // console.warn(this.AllData);
      // const carData = {
      //   carData: 0
      // };
      // this.cartService.carData(carData);
    });
  }

}
