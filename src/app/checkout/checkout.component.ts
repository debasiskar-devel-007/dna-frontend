import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { CartService } from '../cart.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public saletax = 0;
  public selectedProduct: any = { good: 0, better: 0, best: 0, mentor: 0 };
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public expyear: any = [{ val: 20, name: '2020' }, { val: 21, name: '2021' }, { val: 22, name: '2022' }, { val: 23, name: '2023' }, { val: 24, name: '2024' }
    , { val: 25, name: '2025' }, { val: 26, name: '2026' }, { val: 27, name: '2027' }, { val: 28, name: '2028' }, { val: 29, name: '2029' }, { val: 30, name: '2030' }];
    public expmonth: any = [{ val: '01', 'name': 'JANUARY' }, { val: '02', 'name': 'FEBRUARY' }, { val: '03', 'name': 'MARCH' }, { val: '04', 'name': 'APRIL' }, { val: '05', 'name': 'MAY' }
    , { val: '06', 'name': 'JUNE' }, { val: '07', 'name': 'JULY' }, { val: '08', 'name': 'AUGUST' }, { val: '09', 'name': 'SEPTEMBER' }, { val: '10', 'name': 'OCTOBER' }, { val: '11', 'name': 'NOVEMBER' }
    , { val: '12', 'name': 'DECEMBER' }];
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  public productDetails: any = {};
  public userDetails: any = {};
  public status: any = [{ val: 1, name: 'Active' }, { val: 0, name: 'Inactive' }];
  temtdata: any = '';
  // formdata
  formfieldrefresh = true;
  updatetable = true;
  formfieldrefreshdata: any = null;
  formarray: any = [];
  public formdata: any;
  public formdata1: any;
  public formdata2: any;
  public statesjson: any = [];
  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router, public CookieService: CookieService) {
    this.activatedRoute.data.forEach((response: any) => {
      // console.warn('checkoutdetails', response.checkout);
      this.productDetails = response.checkout.results;
      
      console.log(this.productDetails);
      const carData = {
        carData: response.checkout.results[0].product.length
      };
      // this.cartService.carData(carData);
      this.apiService.getState().subscribe((response: any) => {
        // console.log(response)
        for (const i in response) {
          this.statesjson.push(
            { val: response[i].abbreviation, name: response[i].name }
          );
        }
      });
      this.formdata = {
        successmessage: 'Order Placed Sucessfully!!',
        // redirectpath:"/product",
        submittext: 'Rush My Order',
        submitactive: true, // optional, default true
        apiUrl: environment['api_url'],
        // canceltext:"Cancel Now",
        // resettext:"Reset This",
        endpoint: 'api/frontendorder',
        jwttoken: this.apiService.jwtToken,
        fields: [
          {
            // heading:"",
            label: 'First Name',
            name: 'firstname',
            value: '',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your First Name' },
              //  {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
              //  {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
            ]
          },
          {
            // heading:"",
            label: 'Last Name',
            name: 'lastname',
            value: '',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your Last Name' },
              // {rule:'maxLength',value:10,message:"Maximum Of 15 Letters"},
              // {rule:'minLength',value: 2 , message:"Minimum 2 Letters Required"}
            ]
          },
          {
            // heading:"",
            label: 'Address',
            name: 'address',
            value: '',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your Address' },
            ]
          },
          {
            // heading:"",
            label: 'City',
            name: 'city',
            value: '',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your City' },
            ]
          },
          {
            // heading:"",
            label: 'State',
            name: 'state',
            type: 'select',
            val: this.statesjson,
            value: '',
            validations: [
              { rule: 'required', message: 'Enter Your State' },
            ]
          },
          {
            // heading:"",
            label: 'Zip',
            name: 'zip',
            value: '',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your Zip Code ' },
            ]
          },
          {
            // heading:"",
            label: 'Telephone',
            name: 'phone',
            value: '',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your Contact Number' },
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
            // heading:"",
            label: 'Use My Billing Address As Shipping Address',
            name: 'sameaddress',
            type: 'checkbox',
            value: '',
            // validations: [
            //     { rule: 'required' }
            // ]
          },
          {
            // heading:"",
            label: 'First Name',
            name: 'shipping_firstname',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your First Name' },
              //  {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
              //  {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
            ]
          },
          {
            // heading:"",
            label: 'Last Name',
            name: 'shipping_lastname',
            value:'',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your Last Name' },
              // {rule:'maxLength',value:10,message:"Maximum Of 15 Letters"},
              // {rule:'minLength',value: 2 , message:"Minimum 2 Letters Required"}
            ]
          },
          {
            // heading:"",
            label: 'Address',
            name: 'shipping_address',
            value:'',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your Address' },
            ]
          },
          {
            // heading:"",
            label: 'City',
            name: 'shipping_city',
            value:'',
            type: 'text',
            validations: [
              { rule: 'required', message: 'Enter Your City' },
            ]
          },
          {
            // heading:"",
            label: 'State',
            name: 'shipping_state',
            type: 'select',
            val: this.statesjson,
            value:'',
            validations: [
              { rule: 'required', message: 'Enter Your State' },
            ]
          },
          {
            // heading:"",
            label: 'Zip',
            name: 'shipping_zip',
            value:'',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your Zip Code ' },
            ]
          },
          {
            // heading:"",
            label: 'Telephone',
            name: 'shipping_phone',
            value: '',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your Contact Number' },
            ]
          },
          {
            // heading:"",
            label: 'Select Your Card',
            name: 'card_type',
            value: '',
            type: 'select',
            val: [
              { val: 'Others', name: 'Others' },
              { val: 'Visa', name: 'Visa' },
              { val: 'Mastercard', name: 'Mastercard' },
              { val: 'AmericanExpress', name: 'American Express' },
              { val: 'Discover', name: 'Discover' }
            ],
            validations: [
              { rule: 'required', message: 'Please Select Your Card' },
            ]
          },
          {
            // heading:"",
            label: 'CC #',
            name: 'card_cc',
            value: '',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your CC Number ' },
            ]
          },
          {
            // heading:"",
            label: 'Month',
            name: 'expmonth',
            value: '',
            type: 'select',
            val: this.expmonth,
            validations: [
              { rule: 'required', message: 'Enter Your Validity Month' },
            ]
          },
          {
            // heading:"",
            label: 'Year',
            name: 'expyear',
            value: '',
            val: this.expyear,
            type: 'select',
            validations: [
              { rule: 'required', message: 'Enter Your Validity Year' },
            ]
          },
          {
            // heading:"",
            label: 'CVV #',
            name: 'card_cvv',
            value: '',
            type: 'number',
            validations: [
              { rule: 'required', message: 'Enter Your CVV NUmber' },
            ]
          },
          {
            // heading:"",
            label: 'type',
            name: 'productDetails',
            type: 'hidden',
            value: this.productDetails,
          },
          {
            // heading:"",
            label: 'status',
            name: 'status',
            type: 'hidden',
            value: 1
          },
          {
            // heading:"",
            label: 'status',
            name: 'order_status',
            type: 'hidden',
            value: 'Incomplete'
          },
          {
            // heading:"",
            label: 'transactiontype',
            name: 'transactiontype',
            type: 'hidden',
            value: 'TEST'
          }, 
          // {
          //   // heading:"",
          //   label: 'userid',
          //   name: 'userid',
          //   type: 'hidden',
          //   value: JSON.parse(this.CookieService.get('userid'))
          // }, 
          {
            // heading:"",
            label: 'cartid',
            name: 'cartid',
            type: 'hidden',
            value: this.activatedRoute.snapshot.params._id
          },
          {
            label: 'affiliate_id',
            name: 'affiliate_id',
            type: 'hidden',
            value: this.productDetails[0].affiliate_id
          },
          {
            label: 'parentid',
            name: 'parentid',
            type: 'hidden',
            value: this.productDetails[0].parentid
          }
        ]
      };

    });
  
   }

  ngOnInit() {
    //console.log('value',this.productDetails[0].total);
   
    //this.productDetails[0].total=0;
    if(this.productDetails[0].total==0){
      console.log('checking condition');
      this.formfieldrefreshdata = { field: 'removefromcontrol', 
      value: ['card_cc','card_cvv', 'expyear', 'expmonth', 'card_type'] 
    };
    //console.log('>>',this.formdata);
        setTimeout(() => {
          this.formfieldrefreshdata = { field: 'removefromcontrol', 
          value: ['card_cc','expyear'] 
        };
        },1000)
      }
  }

  listenFormFieldChange(val: any) {
    // console.log(val);
    if (val.field == 'fromsubmit') {
      if (val.fromval.message != null && val.fromval.message != '') {
        console.log(val.fromval.message._id);
        this.router.navigateByUrl('ordersuccess/' + val.fromval.message._id);
        const carData = {
          carData: 0
        };
        // this.cartService.carData(carData);
      }

    }

    if (val.field.name != 'card_type' && val.field.name != 'card_cc' && val.field.name != 'expyear' && val.field.name != 'card_cvv' && val.field.name != 'expmonth') {
      // console.log('listenFormFieldChange', val);
      // console.log(val.field.name, val.fieldval);
      if (val.field.name == 'firstname' || val.field.name == 'lastname' || val.field.name == 'address' || val.field.name == 'city' || val.field.name == 'state' || val.field.name == 'zip' || val.field.name == 'phone') {
        this.formarray.push({ val: val.fieldval, name: val.field.name });
      }
      for(const i in this.userDetails){
        this.formarray.push({ val: val.fieldval, name: val.field.name });
      }
      // if (val.field.name == 'state') {
        // this.formarray.push({ val:this.userDetails.firstname , name:'firstname'},
        //                     {val:this.userDetails.lastname,name:'lastname'},
        //                     {val:this.userDetails.address,name:'address'},
        //                     {val:this.userDetails.city,name:'city'},
        //                     {val:this.userDetails.state,name:'state'},
        //                     {val:this.userDetails.zip,name:'zip'}
        // )
      // }
      console.log(this.formarray,'+++++');
      // console.log(val.field.name,val.fieldval,'+++++');
      if (val.field.name == 'sameaddress' && val.fieldval == true) {
        for (let i = 0; i < this.formarray.length; i++) {
   
          setTimeout(() => {
            this.formfieldrefreshdata = { field: 'shipping_' + this.formarray[i].name, value: this.formarray[i].val, disabled: true };
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

}
