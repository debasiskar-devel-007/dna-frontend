import { Component, OnInit } from '@angular/core';
// import { MetaService } from '@ngx-meta/core';
 


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public selectedProduct:any = {good:0, better:0, best:0, mentor:0};
  public productDetails: any = {};

  constructor(
    // public meta: MetaService
    ) { window.scrollTo(500, 0); 
    // this.meta.setTitle('DNA Of Success - Our Products    ');

    // this.meta.setTag('og:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');
    // this.meta.setTag('twitter:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');

    // this.meta.setTag('og:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');
    // this.meta.setTag('twitter:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');

    // this.meta.setTag('og:title', 'DNA Of Success - Our Products');
    // this.meta.setTag('twitter:title', 'DNA Of Success - Our Products');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:url','https://www.dnamastercourse.com/');
    //   this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
  
  }

  ngOnInit() {
  }

  chooseProduct(item, flag){
    console.log(item)
    this.selectedProduct.item = 1 - this.selectedProduct.item;


    if (flag == 'good') {
      this.productDetails.name= 'GOOD';
      this.productDetails.price= 149;
      this.productDetails.delivery= 0;

      this.selectedProduct.best = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.mentor = 0;
    }else  if (flag == 'best') {
      this.productDetails.name= 'BEST';
      this.productDetails.price= 500;
      this.productDetails.delivery= 0;

      this.selectedProduct.good = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.mentor = 0;
    } else if(flag == 'better'){
      this.productDetails.name= 'BETTER';
      this.productDetails.price= 249;
      this.productDetails.delivery= 0;

      this.selectedProduct.good = 0;
      this.selectedProduct.mentor = 0;
      this.selectedProduct.best = 0;
    } else {
      this.productDetails.name= 'MENTOR';
      this.productDetails.price= 600;
      this.productDetails.delivery= 0;

      this.selectedProduct.good = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.best = 0;
    }
  }

}
