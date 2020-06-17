import { Component, OnInit,Inject } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router} from '@angular/router';
// import {CartService} from '../cart.service';
import {environment} from '../../environments/environment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  alldata: any;
  
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cartDetails: any = [];
public flag = false;
public saletax = 0;
public quantity = 1;
public uniqueId: any = 0;

  constructor(public dialog: MatDialog,public CookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router) { 
    this.uniqueId=this.CookieService.get('uniqueID')
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params._id != null && this.activatedRoute.snapshot.params._id != undefined) {
    this.activatedRoute.data.forEach((response: any) => {
      // console.warn('cartdetails',response);
      this.cartDetails = response.cart.results;
    //  console.warn('cartdetails',this.cartDetails);

      // observal cart data
      if (this.cartDetails.length == 0) {
        this.flag = true;
        const carData = {
          carData: 0
        };
        // this.cartService.carData(carData);
      } else {
        const carData = {
        carData: this.cartDetails[0].product.length
      };
        // this.cartService.carData(carData);
      }
     let price=0;
      for (const i in this.cartDetails[0].product) {
        price = price + this.cartDetails[0].product[i].price;
     }

      if (this.cartDetails != null && this.cartDetails[0].price == null) {this.cartDetails[0].price =price;
      } else { this.cartDetails[0].price =price;}
      if (this.cartDetails != null && this.cartDetails[0].shipping_charge == null) {this.cartDetails[0].shipping_charge = 6.95; } else { this.cartDetails[0].shipping_charge = parseInt(this.cartDetails[0].shipping_charge); }

      if (this.cartDetails != null && this.cartDetails[0].subtotal == null) {this.cartDetails[0].subtotal = this.cartDetails[0].price} else { this.cartDetails[0].subtotal = this.cartDetails[0].price}

      this.saletax = this.cartDetails[0].subtotal / 100 * 6;
      this.saletax = parseFloat(this.saletax.toFixed(2));
      this.cartDetails[0].saletax = this.saletax;
      this.cartDetails[0].total = this.cartDetails[0].subtotal + this.cartDetails[0].saletax + this.cartDetails[0].shipping_charge;
      this.cartDetails[0].total = parseFloat(this.cartDetails[0].total.toFixed(2));
      // console.log(this.cartDetails);
    });
  }else{
    let data:any = {
      "userid":this.uniqueId
    }
    this.apiService.customRequest1(data,'api/getcartdetailsbytempid',environment['api_url']).subscribe((res:any) => {
    //  console.log(res);
      this.cartDetails=res.results;
      if(res.length==0){
        this.flag=true;
        let carData={
          carData:0
        };
        // this.cartService.carData(carData);
      } else {
        const carData = {
        carData: res.results[0].product.length
      };
        // this.cartService.carData(carData);
      }
    // console.log(this.cartDetails);
    let price=0;
    for (const i in this.cartDetails[0].product) {
      price = price + this.cartDetails[0].product[i].price;
   }
      if(this.cartDetails!=null && this.cartDetails[0].shipping_charge==null)this.cartDetails[0].shipping_charge=6.95;else this.cartDetails[0].shipping_charge=parseInt(this.cartDetails[0].shipping_charge);

      if(this.cartDetails!=null && this.cartDetails[0].price==null)this.cartDetails[0].price=price;else this.cartDetails[0].price=price;

      if(this.cartDetails!=null && this.cartDetails[0].subtotal==null)this.cartDetails[0].subtotal=this.cartDetails[0].price;else this.cartDetails[0].subtotal=this.cartDetails[0].price;
      
      this.saletax=parseInt(this.cartDetails[0].subtotal)/100*6;
      this.saletax=parseFloat(this.saletax.toFixed(2));
      this.cartDetails[0].saletax=this.saletax;
      this.cartDetails[0].total=parseInt(this.cartDetails[0].subtotal)+this.cartDetails[0].saletax+this.cartDetails[0].shipping_charge;
      this.cartDetails[0].total=parseFloat(this.cartDetails[0].total.toFixed(2));
    //  console.log(this.cartDetails)
    });
  }

  }
    // quantity changes
    calculation(i: any) {
        let price=0;
        for (const i in this.cartDetails[0].product) {
        
            price =price +this.cartDetails[0].product[i].price * this.cartDetails[0].product[i].quantity;
 
         }
 
  //  console.log(price);


        this.cartDetails[0].subtotal = price;
        this.saletax = this.cartDetails[0].subtotal / 100 * 6;
        this.saletax = parseFloat(this.saletax.toFixed(2));
        this.cartDetails[0].saletax = this.saletax;
        this.cartDetails[0].total = this.cartDetails[0].subtotal + this.cartDetails[0].saletax + this.cartDetails[0].shipping_charge;
        this.cartDetails[0].total = parseFloat(this.cartDetails[0].total.toFixed(2));
     // console.log(this.cartDetails);
    }


// remove items of cart from
removeItem(id: any, idx: any) {
  this.cartDetails[0].product.splice(idx, idx + 1);
  const removedata: any = {
    id,
    product: this.cartDetails[0]
  };
  this.apiService.customRequest1(removedata, 'api/removecartitem', environment['api_url']).subscribe((res: any) => {
  // console.log(res)
  if (res.status == 'success') {
    let price=0;
    for (const i in this.cartDetails[0].product) {
      price = price + this.cartDetails[0].product[i].price;
   }
    this.cartDetails[0].subtotal = this.cartDetails[0].price;
    this.saletax = this.cartDetails[0].subtotal / 100 * 6;
    this.saletax = parseFloat(this.saletax.toFixed(2));
    this.cartDetails[0].saletax = this.saletax;
    this.cartDetails[0].total = this.cartDetails[0].subtotal + this.cartDetails[0].saletax + this.cartDetails[0].shipping_charge;
    this.cartDetails[0].total = parseFloat(this.cartDetails[0].total.toFixed(2));
      // observal cart data
    const carData = {
        carData: res.results.product.length
      };
    // this.cartService.carData(carData);
  } else {
    this.cartDetails = [];
    this.flag = true;
    // observal cart data
    const carData = {
      carData: 0
    };
    // this.cartService.carData(carData);
  }
})
// console.log('removeitem',this.cartDetails)
}

continushopping() {
  if (this.flag == true) {
    this.router.navigateByUrl('live-webinar/');
  } else {
    if (this.activatedRoute.snapshot.params._id != null && this.activatedRoute.snapshot.params._id != undefined) {
    this.router.navigateByUrl('live-webinar/' + this.activatedRoute.snapshot.params._id);
    } else {
      this.router.navigateByUrl('live-webinar/' + this.cartDetails[0]._id);
    }
  }

}
// checkout functions
checkout() {
  let checkout: any = {};
  this.openDialog()
  // console.log(this.cartDetails[0]);
  return;
  if (this.activatedRoute.snapshot.params._id != null && this.activatedRoute.snapshot.params._id != undefined) {
   checkout = {
    cartid: this.activatedRoute.snapshot.params._id,
    cartdetails: this.cartDetails[0]
  };
  } else {
    checkout = {
      cartid: this.cartDetails[0]._id,
      cartdetails: this.cartDetails[0]
    };
  }
 // console.log(checkout);

  this.apiService.customRequest1(checkout, 'api/checkout', environment['api_url']).subscribe((res: any) => {
    if (res.status == 'success') {
      this.router.navigateByUrl('checkout/' + res.results._id);
    }

  });
}

openDialog(): void {
  const dialogRef = this.dialog.open(loginModal, {
    // width: '250px',
    data:this.cartDetails,
    panelClass: 'cartpopup',
     
  });

  dialogRef.afterClosed().subscribe(result => {
    // this.cartDetails[0].type=result
    console.log('The dialog was closed');
  });
}

}

@Component({
  selector: 'loginModal',
  templateUrl: 'login.html',
})
export class loginModal {
  public dta:any =[];
  constructor(
    public dialogRef: MatDialogRef<loginModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router) {
      this.dta=data;
      // console.log(data)
    }

    guestuser(value:any){
    let checkout: any = {};
    console.log(value)
    console.log(this.dta)
    this.dta[0].usertype='guest'
    if (this.activatedRoute.snapshot.params._id != null && this.activatedRoute.snapshot.params._id != undefined) {
      checkout = {
       cartid: this.activatedRoute.snapshot.params._id,
       cartdetails: this.dta[0]
     };
     } else {
       checkout = {
         cartid: this.dta[0]._id,
         cartdetails: this.dta[0]
       };
     }
    console.log(checkout);
     this.apiService.customRequest1(checkout, 'api/checkout', environment['api_url']).subscribe((res: any) => {
       if (res.status == 'success') {
         this.router.navigateByUrl('checkout/' + res.results._id);
       }
   
     });
    this.dialogRef.close(value);
  }

}