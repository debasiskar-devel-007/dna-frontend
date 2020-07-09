import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-live-webinar',
  templateUrl: './live-webinar.component.html',
  styleUrls: ['./live-webinar.component.css']
})
export class LiveWebinarComponent implements OnInit {
  public allproduct: any = [];
  public uniqueId: any = 0;
  public acctoken: any;
  public parentdetails: any = [];
  constructor(
    public cookieService: CookieService,
    private apiService: ApiService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private meta: MetaService) {




    this.meta.setTitle('DNA Of Success - Live Webinar');

    this.meta.setTag('og:description', 'Attend Live Webinar hosted by Jack Zufelt where he gives live demonstrations and talks about his programs and new ideas and developments. You can also get your questions answered by the master himself on these webinars.');
    this.meta.setTag('twitter:description', 'Attend Live Webinar hosted by Jack Zufelt where he gives live demonstrations and talks about his programs and new ideas and developments. You can also get your questions answered by the master himself on these webinars.');

    this.meta.setTag('og:keyword', 'Live Webinar DNA Of Success, DNA Of Success Live Webinar, DNA Master Course Live Webinar');
    this.meta.setTag('twitter:keyword', 'Live Webinar DNA Of Success, DNA Of Success Live Webinar, DNA Master Course Live Webinar');

    this.meta.setTag('og:title', 'DNA Of Success - Live Webinar');
    this.meta.setTag('twitter:title', 'DNA Of Success - Live Webinar');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://dna.influxiq.com/pages/live-webinar');
    this.meta.setTag('og:image', 'https://dna.influxiq.com/assets/images/default_image.jpg');





    this.uniqueId = this.makeid(14);
    let uid = this.cookieService.get('uniqueID');
    if (uid != null && uid != undefined && uid != '') {
      this.uniqueId = this.cookieService.get('uniqueID')
    } else {
      this.cookieService.set('uniqueID', this.uniqueId);
    }
    if (this.activatedRoute.snapshot.routeConfig.path == 'live-webinar/:id') {
      let data: any = {
        "id": this.activatedRoute.snapshot.params.id
      }
      this.apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        this.parentdetails = res.result[0];
      })
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
      // console.warn('live webinar webinars',response);
      this.allproduct = response.shop.results.package;
      this.acctoken = response.shop.results.token.access_token;
      // console.log(this.acctoken)
      for (const i in this.allproduct) {
        this.allproduct[i].description_html = this.allproduct[i].description.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '');
      }
      // console.log(this.allproduct)
    });
  }


  productselect(value: any) {
    // console.log(value);
    let parentid = '';
    let affiliate_id = '';
    if (this.parentdetails != null && this.parentdetails != '') {
      console.log(this.parentdetails);
      if (this.parentdetails.type == "mentor") {
        parentid = this.parentdetails._id
      }
      if (this.parentdetails.type == "affiliate") {
        affiliate_id = this.parentdetails._id
      }
    }
    // console.log(parentid);

    const product: any = {};
    product.price =value.price;
    product.quantity = 1;
    product.name = value.product_name;
    product.productid = value._id;
    product.sq_no = value.product_sq_no;
    product.image = value.image;
    product.webinarid = value._id;
    product.free_shipping=value.free_shipping;
    //  console.log(product);

    let data: any = {};

    data = {
      product,
      tempid: this.uniqueId,
      token: this.acctoken,
      parentid: parentid,
      affiliate_id: affiliate_id
    };

    //  console.log(data);
  
    this.apiService.customRequest1(data, 'api/frontendcart', environment['api_url']).subscribe((res: any) => {
      // console.warn(res);
      if (res.status == 'success') {
        this.router.navigateByUrl('cart/' + res.result._id);
      }
    });

    // console.log(this.productDetails);
  }
}
