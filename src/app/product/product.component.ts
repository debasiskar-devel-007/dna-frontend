import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import * as console from 'console';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public saletax: number = 0;
  public total: number = 0;
  public allPackage: any = [];
  public index: number;
  public acctoken: any;
  public selectedProduct: any = { good: 0, better: 0, best: 0, mentor: 0 };
  public expyear: any = [{ val: 20, 'name': '2020' }, { val: 21, 'name': '2021' }, { val: 22, 'name': '2022' }, { val: 23, 'name': '2023' }, { val: 24, 'name': '2024' }
    , { val: 25, 'name': '2025' }, { val: 26, 'name': '2026' }, { val: 27, 'name': '2027' }, { val: 28, 'name': '2028' }, { val: 29, 'name': '2029' }, { val: 30, 'name': '2030' }]
  public expmonth: any = [{ val: '01', 'name': 'JANUARY' }, { val: '02', 'name': 'FEBRUARY' }, { val: '03', 'name': 'MARCH' }, { val: '04', 'name': 'APRIL' }, { val: '05', 'name': 'MAY' }
    , { val: '06', 'name': 'JUNE' }, { val: '07', 'name': 'JULY' }, { val: '08', 'name': 'AUGUST' }, { val: '09', 'name': 'SEPTEMBER' }, { val: '10', 'name': 'OCTOBER' }, { val: '11', 'name': 'NOVEMBER' }
    , { val: '12', 'name': 'DECEMBER' }];
  public productDetails: any = {};
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata: any = '';
  // formdata
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
  formarray: any = [];
  public formdata: any;
  public formdata1: any;
  public formdata2: any;
  public statesjson: any = [];
  public parentdetails: any = [];
  public banner_image: any;


  constructor(public dialog: MatDialog, public CookieService: CookieService, public _apiService: ApiService, public ActivatedRoute: ActivatedRoute,
    public meta: MetaService, public router: Router) {
    this.meta.setTitle('DNA Of Success - Our Products ');
    this.meta.setTag('og:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');
    this.meta.setTag('twitter:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');

    this.meta.setTag('og:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');
    this.meta.setTag('twitter:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');

    this.meta.setTag('og:title', 'DNA Of Success - Our Products');
    this.meta.setTag('twitter:title', 'DNA Of Success - Our Products');

    if (this.router.url == '/pages/products' || this.ActivatedRoute.snapshot.routeConfig.path == 'products/:class') {
      this.meta.setTag('og:image', 'https://dna.influxiq.com/assets/images/default_image.jpg');
      this.meta.setTag('og:url', 'https://dna.influxiq.com/pages/products');
      this.meta.setTag('twitter:url', 'https://dna.influxiq.com/pages/products');
    }


    this._apiService.getState().subscribe((response: any) => {
      // console.log(response)
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name }
        );
      }
    })
  }


  ngOnInit() {

    console.log(this.ActivatedRoute.snapshot.routeConfig.path,'??')

    if (this.ActivatedRoute.snapshot.routeConfig.path == 'products/:class/:_id') {
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.allPackage = resolveData.packagedata.results.package;

        let tdata: any = { "source": "", "condition": {} };
        this._apiService.customRequest1(tdata, 'api/getwebinartoken', environment['api_url']).subscribe((res: any) => {
          if (res.status == 'success') {
            this.acctoken = res.results.access_token;
          }
        })

        this.banner_image = resolveData.packagedata.results.banner[0].image;

        // console.log(this.banner_image,'@@@@>>>>>',this.ActivatedRoute.params,'https://dna.influxiq.com/landingpage/'+ this.ActivatedRoute.snapshot.params.class +'/'+ this.ActivatedRoute.snapshot.params._id);

        this.meta.setTag('og:image', this.banner_image);
        this.meta.setTag('twitter:image', this.banner_image);
        this.meta.setTag('og:url', 'https://dna.influxiq.com/pages/products/' + this.ActivatedRoute.snapshot.params.class + '/' + this.ActivatedRoute.snapshot.params._id);
        this.meta.setTag('twitter:url', 'https://dna.influxiq.com/pages/products/' + this.ActivatedRoute.snapshot.params.class + '/' + this.ActivatedRoute.snapshot.params._id);
      });
      let data: any = {
        "id": this.ActivatedRoute.snapshot.params.class
      }
      this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        // console.log(res)
        this.parentdetails = res.result[0];
      })
    }


    if (this.router.url == '/pages/products') {
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.allPackage = resolveData.packagedata.results.package;
        // this.acctoken = resolveData.packagedata.results.token.access_token;
        // console.log(this.acctoken);
        //  console.log(resolveData.packagedata) 

        let tdata: any = { "source": "", "condition": {} };
        this._apiService.customRequest1(tdata, 'api/getwebinartoken', environment['api_url']).subscribe((res: any) => {
          if (res.status == 'success') {
            this.acctoken = res.results.access_token;
          }
        })


      });
    }



    let uid = this.CookieService.get('shareid');
    if (uid != null && uid != undefined && uid != '' && this.ActivatedRoute.snapshot.params.class == null) {
      let data: any = {
        "id": this.CookieService.get('shareid')
      }
      this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        // console.warn(res)
        this.parentdetails = res.result[0];
      })
    }


    if (this.ActivatedRoute.snapshot.url[0].path == 'products-list') {
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        if (resolveData.packagedata.status == 'success') {
          this.allPackage = resolveData.packagedata.results.package;
          // this.acctoken = resolveData.packagedata.results.token.access_token;

          let tdata: any = { "source": "", "condition": {} };
          this._apiService.customRequest1(tdata, 'api/getwebinartoken', environment['api_url']).subscribe((res: any) => {
            if (res.status == 'success') {
              this.acctoken = res.results.access_token;
            }
          })

          setTimeout(() => {
            document.querySelector('.package' + this.ActivatedRoute.snapshot.params.id).scrollIntoView({ behavior: 'smooth', });
          }, 1000);


        }

      });


    }
    //for buy now button
    if (this.ActivatedRoute.snapshot.url[0].path == 'products-buy') {
      // console.log('products buy');
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        if (resolveData.packagedata.status == 'success') {
          this.allPackage = resolveData.packagedata.results.package;
          // this.acctoken = resolveData.packagedata.results.token.access_token;

          let tdata: any = { "source": "", "condition": {} };
          this._apiService.customRequest1(tdata, 'api/getwebinartoken', environment['api_url']).subscribe((res: any) => {
            if (res.status == 'success') {
              this.acctoken = res.results.access_token;
            }
          })


          for (const i in this.allPackage) {

            if (this.ActivatedRoute.snapshot.params.buy === i) {
              console.log('if', this.allPackage[i]);
              this.chooseProduct(this.ActivatedRoute.snapshot.params.buy, this.allPackage[i]);
            }
          }
          setTimeout(() => {
            document.querySelector('.package' + this.ActivatedRoute.snapshot.params.buy).scrollIntoView({ behavior: 'smooth', });
          }, 1000);
        }
      });
    }


    if (this.ActivatedRoute.snapshot.params.class != null && this.ActivatedRoute.snapshot.params.class != undefined) {
      this.CookieService.set('shareid', this.ActivatedRoute.snapshot.params.class);
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.allPackage = resolveData.packagedata.results.package;
        // this.acctoken = resolveData.packagedata.results.token.access_token;
        // console.log(this.acctoken);
        //console.log(resolveData.packagedata) 

        let tdata: any = { "source": "", "condition": {} };
        this._apiService.customRequest1(tdata, 'api/getwebinartoken', environment['api_url']).subscribe((res: any) => {
          if (res.status == 'success') {
            this.acctoken = res.results.access_token;
          }
        })

      });

      let data: any = {
        "id": this.ActivatedRoute.snapshot.params.class
      }
      this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        // console.log(res)
        this.parentdetails = res.result[0];
      })

    }
    // else {
    //   let data: any = {
    //     "id": this.ActivatedRoute.snapshot.params.class
    //   }
    //   this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
    //     // console.log(res)
    //     this.parentdetails = res.result[0];
    //   })
    // }
    /////////////////////////

    this.formdata = {
      successmessage: "Order Placed Sucessfully!!",
      //redirectpath:"/product",
      submittext: "Rush My Order",
      submitactive: true, //optional, default true
      apiUrl: this._apiService.nodesslurl,
      // canceltext:"Cancel Now",
      //resettext:"Reset This",
      endpoint: 'api/order',
      jwttoken: this._apiService.jwtToken,
      fields: [
        {
          label: 'productdetails',
          name: 'productDetails',
          type: 'hidden',
          value: this.productDetails
        },
        {
          //heading:"",
          label: "First Name",
          name: "firstname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your First Name" },
            //  {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
            //  {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
          ]
        },
        {
          //heading:"",
          label: "Last Name",
          name: "lastname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Last Name" },
            // {rule:'maxLength',value:10,message:"Maximum Of 15 Letters"},
            // {rule:'minLength',value: 2 , message:"Minimum 2 Letters Required"}
          ]
        },
        {
          //heading:"",
          label: "Email",
          name: "email",
          type: 'email',
          hint: "",
          validations: [
            { rule: 'required', message: "Email field Needs to be required" },
            { rule: 'pattern', value: this.emailregex, message: "Enter a valid Email" }]
        },
        {
          //heading:"",
          label: "Telephone",
          name: "phone",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Contact Number" },
          ]
        },
        {
          //heading:"",
          label: "Physical Address",
          name: "address",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Address" },
          ]
        },
        {
          //heading:"",
          label: "State",
          name: "state",
          type: "select",
          val: this.statesjson,
          validations: [
            { rule: 'required', message: "Select Your State" },
          ]
        },
        {
          //heading:"",
          label: "City",
          name: "city",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your City" },
          ]
        },

        {
          //heading:"",
          label: "Zip",
          name: "zip",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Zip Code " },
          ]
        },


        {
          //heading:"",
          label: "Password",
          name: "password",
          type: 'password',
          hint: "",
          validations: [
            { rule: 'required', message: "Enter your required" },
            { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
          ]
        },
        {
          //heading:"",
          label: "Confirm Password",
          name: "confirmpassword",
          type: 'password',
          hint: "",
          validations: [
            { rule: 'required', message: "Confirm Password field Needs to be required" },
            { rule: 'match', message: "Confirm Password field Needs to  match Password" },
            { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
          ]
        },
        {
          //heading:"",
          label: "Use My Billing Address As Shipping Address",
          name: "sameaddress",
          type: 'checkbox',
          value: '',
          // validations: [
          //     { rule: 'required' }
          // ]
        },
        {
          //heading:"",
          label: "First Name",
          name: "shipping_firstname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your First Name" },
            //  {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
            //  {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
          ]
        },
        {
          //heading:"",
          label: "Last Name",
          name: "shipping_lastname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Last Name" },
            // {rule:'maxLength',value:10,message:"Maximum Of 15 Letters"},
            // {rule:'minLength',value: 2 , message:"Minimum 2 Letters Required"}
          ]
        },
        {
          //heading:"",
          label: "Physical Address",
          name: "shipping_address",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Address" },
          ]
        },
        {
          //heading:"",
          label: "City",
          name: "shipping_city",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your City" },
          ]
        },
        {
          //heading:"",
          label: "State",
          name: "shipping_state",
          type: "select",
          val: this.statesjson,
          validations: [
            { rule: 'required', message: "Select Your State" },
          ]
        },
        {
          //heading:"",
          label: "Zip",
          name: "shipping_zip",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Zip Code" },
          ]
        },
        {
          //heading:"",
          label: "Select Your Card",
          name: "card_type",
          value: '',
          type: "select",
          val: [
            { val: "Others", name: "Others" },
            { val: "Visa", name: "Visa" },
            { val: "Mastercard", name: "Mastercard" },
            { val: "AmericanExpress", name: "American Express" },
            { val: "Discover", name: "Discover" }
          ],
          validations: [
            { rule: 'required', message: "Please Select Your Card" },
          ]
        },
        {
          //heading:"",
          label: "CC #",
          name: "card_cc",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your CC Number " },
          ]
        },
        {
          //heading:"",
          label: "Month",
          name: "expmonth",
          value: '',
          type: "select",
          val: this.expmonth,
          validations: [
            { rule: 'required', message: "Enter Your Validity Month" },
          ]
        },
        {
          //heading:"",
          label: "Year",
          name: "expyear",
          value: '',
          val: this.expyear,
          type: "select",
          validations: [
            { rule: 'required', message: "Enter Your Validity Year" },
          ]
        },
        {
          //heading:"",
          label: "CVV #",
          name: "card_cvv",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your CVV NUmber" },
          ]
        },
        {
          //heading:"",
          label: "status",
          name: "status",
          type: 'hidden',
          value: 1
        },
        {
          //heading:"",
          label: "status",
          name: "order_status",
          type: 'hidden',
          value: 'Incomplete'
        },
        {
          //heading:"",
          label: "transactiontype",
          name: "transactiontype",
          type: 'hidden',
          value: 'TEST'
        },
        {
          label: 'accesstoken',
          name: 'accesstoken',
          type: 'hidden',
          value: this.acctoken
        }
        // {
        //   //heading:"",
        //   label: "parentid",
        //   name: "parentid",
        //   type: 'hidden',
        //   value:this.ActivatedRoute.snapshot.params.class
        // },
        // {
        //   //heading:"",
        //   label: "parenttype",
        //   name: "parenttype",
        //   type: 'hidden',
        //   value:this.parentdetails.type
        // }
      ]
    };

    setTimeout(() => {
      // console.log(this.parentdetails.type)
      if (this.parentdetails != null && this.parentdetails != '') {
        this.formfieldrefreshdata = {
          field: 'addfromcontrol',
          value: {
            label: 'parenttype',
            name: 'parenttype',
            type: 'hidden',
            after: 'status',
            value: this.parentdetails.type
          }
        };

        //affiliate
        if (this.parentdetails.type == 'affiliate') {
          this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: {
              label: 'affiliate_id',
              name: 'affiliate_id',
              type: 'hidden',
              after: 'transactiontype',
              value: this.parentdetails._id
            }
          };
        }
        //mentor
        if (this.parentdetails.type == 'mentor') {
          this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: {
              label: 'parentid',
              name: 'parentid',
              type: 'hidden',
              after: 'transactiontype',
              value: this.parentdetails._id
            }
          };
        }
      }

    }, 5000);


  }

  chooseProduct(i: any, item: any) {
    // this.openDialog();
    // return;
    // document.querySelector('.newproduct_list1').scrollIntoView({ behavior: 'smooth', });
    // console.log(item);
    // console.log(i);
    if (item.free_shipping == null) {
      // console.log('freeshipping null');
      this.productDetails.delivery = 6.95;
      this.productDetails.name = item.productname;
    } else {
      this.productDetails.delivery = 0.00;
      this.productDetails.name = item.productname;

    }

    this.index = i;
    this.allPackage[i].flag = item._id;

    this.productDetails.price = item.price;
    // this.productDetails.delivery = 6.95;
    this.saletax = this.productDetails.price / 100 * 6;
    this.saletax = parseFloat(this.saletax.toFixed(2));
    this.productDetails.saletax = this.saletax;
    this.productDetails.subtotal = this.productDetails.price * 1;
    this.productDetails.total = this.productDetails.subtotal + this.saletax + this.productDetails.delivery;
    this.productDetails.total = parseFloat(this.productDetails.total.toFixed(2));
    this.total = this.productDetails.total;
    this.productDetails.usertype = item.role.toLowerCase();
    this.productDetails.webinarid = item.webinar;
    this.productDetails.webinar_credit = item.webinar_credit;
    // console.warn(this.productDetails);
  }
  listenFormFieldChange(val: any) {
    // console.log(val);
    if (val.field == 'fromsubmit') {
      // console.log('val');
      //   this.openDialog();
      //   return;
      if (val.fromval.message != null && val.fromval.message != '') {
        // console.log(val.fromval.message._id);
        this.router.navigateByUrl('success/' + val.fromval.message._id);

      }

    }

    if (val.field.name != 'card_type' && val.field.name != 'card_cc' && val.field.name != 'expyear' && val.field.name != 'card_cvv' && val.field.name != 'expmonth') {
      //console.log('listenFormFieldChange', val);
      if (val.field.name == 'firstname' || val.field.name == 'lastname' || val.field.name == 'address' || val.field.name == 'city' || val.field.name == 'state' || val.field.name == 'zip') {
        this.formarray.push({ val: val.fieldval, name: val.field.name })
      }
      // console.log(this.formarray,'+++++');
      if (val.field.name == 'sameaddress' && val.fieldval == true) {
        for (let i = 0; i < this.formarray.length; i++) {
          setTimeout(() => {
            this.formfieldrefreshdata =
              { field: 'shipping_' + this.formarray[i].name, value: this.formarray[i].val, disabled: true };
          }, 50 * (i + 1));
        }
      }
      if (val.field.name == 'sameaddress' && val.fieldval == false) {
        for (let i = 0; i < this.formarray.length; i++) {
          setTimeout(() => {
            this.formfieldrefreshdata =
              { field: 'shipping_' + this.formarray[i].name, value: '', disabled: true };
          }, 50 * (i + 1));
        }
      }

    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CommingSoon2, {
      width: '250px',
      data: '',
      panelClass: 'commingsoon'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../home/commingsoon.html',
})
export class CommingSoon2 {

  constructor(
    public dialogRef: MatDialogRef<CommingSoon2>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}