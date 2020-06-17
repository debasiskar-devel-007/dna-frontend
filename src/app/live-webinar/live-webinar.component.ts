import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-live-webinar',
  templateUrl: './live-webinar.component.html',
  styleUrls: ['./live-webinar.component.css']
})
export class LiveWebinarComponent implements OnInit {
  public allproduct: any = [];
  public uniqueId: any = 0;
  constructor(public cookieService: CookieService, private apiService: ApiService, public router: Router, public activatedRoute: ActivatedRoute) {
    this.uniqueId = this.makeid(14);
    let uid = this.cookieService.get('uniqueID');
    if (uid != null && uid != undefined && uid != '') {
      console.log(this.cookieService.get('uniqueID'));
    } else {
      this.cookieService.set('uniqueID', this.uniqueId);
      //console.log(this.uniqueId);
    }

  }
  //make uniqueId
  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  ngOnInit() {
    this.activatedRoute.data.forEach((response: any) => {
      console.warn('shop',response);
      this.allproduct = response.shop.results.package;
      for (const i in this.allproduct) {
        this.allproduct[i].description_html = this.allproduct[i].description.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');
      }
      // console.log(this.allproduct)
    });
  }
  productselect(value: any) {
    const product: any = {};
    product.price = 49;
    product.quantity = 1;
    product.name = value.product_name;
    product.sq_no = value.product_sq_no;
    product.image = value.image;
    // console.log(product);
    let data: any = {};
    if (this.activatedRoute.snapshot.params.shopid != '' && this.activatedRoute.snapshot.params.shopid != null) {
      data = {
        product,
        userid: '123',
        id: this.activatedRoute.snapshot.params.shopid
      };
    } else {
      data = {
        product,
        userid: '12'
      };
    }

    // console.log(data);
    this.apiService.customRequest1(data, 'api/cart', environment['api_url']).subscribe((res: any) => {
      // console.warn(res);
      if (res.status == 'success') {
        this.router.navigateByUrl('cart/' + res.result._id);
      }
    });

    // console.log(this.productDetails);
  }
}
