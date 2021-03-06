import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

// import * as console from 'console';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetaService } from '@ngx-meta/core';
export interface DialogData {
  alldata: any;

}
@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  public productDetails: any = {};
  public saletax: number;
  public parentdetails: any = [];

  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata: any = '';
  // formdata
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
  public formdata: any;
  public statesjson: any = [];
  public parentid: any = '';
  public shareUser: any = [];
  constructor(
    public CookieService: CookieService,
    public dialog: MatDialog,
    public _apiService: ApiService,
    public ActivatedRoute: ActivatedRoute,
    private meta: MetaService) {
    this.meta.setTitle('DNA Of Success - Mentor SignUp');

    this.meta.setTag('og:description', " Jack M. Zufelt’s “The DNA Master Course” Online Training System and Mentor Program is the ultimate stage for Mentors to put their skills to good use, and make incredible money in the process. Become a Mentor TODAY and join a program that has been taught to millions in over 50 countries.");

    this.meta.setTag('twitter:description', " Jack M. Zufelt’s “The DNA Master Course” Online Training System and Mentor Program is the ultimate stage for Mentors to put their skills to good use, and make incredible money in the process. Become a Mentor TODAY and join a program that has been taught to millions in over 50 countries.");

    this.meta.setTag('og:keyword', "DNA Master Course Mentor Signup, Mentor Signup DNA Master Course, DNA Master Course for Mentors");

    this.meta.setTag('twitter:keyword', "DNA Master Course Mentor Signup, Mentor Signup DNA Master Course, DNA Master Course for Mentors");

    this.meta.setTag('og:title', 'DNA Of Success - Mentor SignUp');
    this.meta.setTag('twitter:title', 'DNA Of Success - Mentor SignUp');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://dna.influxiq.com/pages/mentorsignup');
    this.meta.setTag('og:image', 'https://dna.influxiq.com/assets/images/default_image.jpg');



    this.productDetails.name = 'Mentor Package for $749';
    this.productDetails.price = 0;
    this.productDetails.delivery = 6.95;
    this.saletax = this.productDetails.price / 100 * 6;
    this.saletax = parseFloat(this.saletax.toFixed(2));
    this.productDetails.saletax = this.saletax;
    this.productDetails.subtotal = this.productDetails.price * 1;
    this.productDetails.total = this.productDetails.subtotal + this.saletax + this.productDetails.delivery;
    this.productDetails.total = parseFloat(this.productDetails.total.toFixed(2));
    this.productDetails.usertype = 'mentor';
    this.productDetails.webinarid = [null];
    this.productDetails.webinar_credit ="1000";

    // console.log(this.productDetails)
    this._apiService.getState().subscribe((response: any) => {
      // console.log(response)
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
          //{ 'val': response[i].name, 'name': response[i].name }
        );
      }
    })
    let uid = this.CookieService.get('shareid');
    if (uid != null && uid != undefined && uid != '' && this.ActivatedRoute.snapshot.params.class == null) {
      let data: any = {
        "id": this.CookieService.get('shareid')
      }
      this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        // console.warn(res)
        this.shareUser = res.result[0];
      })
    }

    if (this.ActivatedRoute.snapshot.params._id != null && typeof (ActivatedRoute.snapshot.params._id) != "undefined") {
      this.CookieService.set('shareid', this.ActivatedRoute.snapshot.params._id);
      this.parentid = this.ActivatedRoute.snapshot.params._id;
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.shareUser = resolveData.Data.results.res[0]
        // console.log(this.shareUser,resolveData);
      });
    }
    this.formdata = {
      successmessage: "Added Successfully !!",
      redirectpath: "",
      submittext: "Submit",
      submitactive: true, //optional, default true
      //  apiUrl:this._apiService.nodesslurl,
      //  endpoint:'api/temptable',                                                 
      jwttoken: this._apiService.jwtToken,
      fields: [
        {
          heading: "",
          label: "First Name",
          name: "firstname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your First Name" },
            { rule: 'maxLength', value: 10, message: "Maximum of 15 Letters" },
            { rule: 'minLength', value: 2, message: "Minimum 2 Letters Required" }
          ]
        },
        {
          heading: "",
          label: "Last Name",
          name: "lastname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Last Name" },
            { rule: 'maxLength', value: 10, message: "Maximum Of 15 Letters" },
            { rule: 'minLength', value: 2, message: "Minimum 2 Letters Required" }
          ]
        },
        {
          label: "Email",
          name: "email",
          type: 'email',
          hint: "",
          validations: [
            { rule: 'required', message: "Email field Needs to be required" },
            { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }]
        },
        {
          heading: "",
          label: "Telephone",
          name: "phone",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Contact Number" },
          ]
        },
        {
          heading: "",
          label: "Business Name",
          name: "company",
          value: '',
          type: "text",
          // validations:[
          //     {rule:'required'},
          //     {rule:'maxLength',value:10},
          //     {rule:'minLength',value: 2}
          //     ]
        },
        {
          heading: "",
          label: "Physical Address",
          name: "address",
          value: '',
          type: "text",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        {
          heading: "",
          label: "State",
          name: "state",
          type: "select",
          val: this.statesjson,
          validations: [
            { rule: 'required', message: "Enter Your State" },
          ]
        },
        {
          heading: "",
          label: "City",
          name: "city",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your City" },
          ]
        },
        
        
        {
          heading: "",
          label: "Zip",
          name: "zip",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Pin Code " },
          ]
        },
        
        {
          heading: "",
          label: "Notes",
          name: "notes",
          value: '',
          type: "textarea",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        // {
        //   heading:"",
        //   label:"User Name",
        //   name:"username",
        //   value:'',
        //   type:"text",
        //   // validations:[
        //   //     {rule:'required'},
        //   //     ]
        // },
        {
          label: "Password",
          name: "password",
          type: 'password',
          hint: "",
          validations: [
            { rule: 'required', message: "Password field Needs to be required" },
            { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
          ]
        }, {
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
          label: "type",
          name: "type",
          type: 'hidden',
          value: "mentor"
        },
        {
          label: "status",
          name: "status",
          type: 'hidden',
          value: 1
        },
        {
          label: "type",
          name: "product",
          type: 'hidden',
          value: this.productDetails
        }
      ]
    };

  }

  ngOnInit() {
    if (this.ActivatedRoute.snapshot.params._id != null && typeof (this.ActivatedRoute.snapshot.params._id) != "undefined") {
      setTimeout(() => {
        //  console.log(this.shareUser)
        //  console.log(this.shareUser.type)

        if (this.shareUser.type == 'affiliate') {
          this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: {
              label: 'affiliate_id',
              name: 'affiliate_id',
              type: 'hidden',
              after: 'type',
              value: this.parentid
            }
          };
        }
        //mentor
        if (this.shareUser.type == 'mentor') {
          this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: {
              label: 'parentid',
              name: 'parentid',
              type: 'hidden',
              after: 'type',
              value: this.parentid
            }
          };
        }

      }, 3000);
    }
  }

  listenFormFieldChange(val: any) {
    console.log(val)
    if (val.field == 'fromsubmit') {
      this.openDialog(val.fromval);
    }
  }
  openDialog(val: any) {
    const dialogRef = this.dialog.open(formModal, {
      width: '',
      data: val,
      panelClass: 'formpopupMS',

    });

    dialogRef.afterClosed().subscribe(result => {
      // this.cartDetails[0].type=result
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'formModal',
  templateUrl: 'form.html',
})
export class formModal {
  public dta: any = [];
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
  formarray: any = [];
  public formdata: any;
  public formdata1: any;
  public formdata2: any;
  public statesjson: any = [];
  public expyear: any = [{ val: 20, 'name': '2020' }, { val: 21, 'name': '2021' }, { val: 22, 'name': '2022' }, { val: 23, 'name': '2023' }, { val: 24, 'name': '2024' }
    , { val: 25, 'name': '2025' }, { val: 26, 'name': '2026' }, { val: 27, 'name': '2027' }, { val: 28, 'name': '2028' }, { val: 29, 'name': '2029' }, { val: 30, 'name': '2030' }]
  public expmonth: any = [{ val: '01', 'name': 'JANUARY' }, { val: '02', 'name': 'FEBRUARY' }, { val: '03', 'name': 'MARCH' }, { val: '04', 'name': 'APRIL' }, { val: '05', 'name': 'MAY' }
    , { val: '06', 'name': 'JUNE' }, { val: '07', 'name': 'JULY' }, { val: '08', 'name': 'AUGUST' }, { val: '09', 'name': 'SEPTEMBER' }, { val: '10', 'name': 'OCTOBER' }, { val: '11', 'name': 'NOVEMBER' }
    , { val: '12', 'name': 'DECEMBER' }];
  constructor(
    public dialogRef: MatDialogRef<formModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public activatedRoute: ActivatedRoute, public apiService: ApiService, public router: Router) {
    this.apiService.getState().subscribe((response: any) => {
      // console.log(response)
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
          //{ 'val': response[i].name, 'name': response[i].name }
        );
      }
    })
    this.dta = data;

    console.log(this.dta)

    this.formdata = {
      successmessage: "Order Placed Sucessfully!!",
      //redirectpath:"/product",
      submittext: "Rush My Order",
      submitactive: true, //optional, default true
      apiUrl: this.apiService.nodesslurl,
      // canceltext:"Cancel Now",
      // resettext:"Reset",
      endpoint: 'api/order',
      jwttoken: '',
      fields: [
        {
          label: 'productdetails',
          name: 'productDetails',
          type: 'hidden',
          value: this.dta.product
        },
        {
          label: 'company',
          name: 'company',
          type: 'hidden',
          value: this.dta.company
        },
        {
          //heading:"",
          label: "Billing Name",
          name: "firstname",
          value: this.dta.firstname,
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Name" },
            //  {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
            //  {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
          ]
        },
        {
          //heading:"",
          label: "Last Name",
          name: "lastname",
          value: this.dta.lastname,
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
          name: "address",
          value: this.dta.address,
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your Address" },
          ]
        },
        {
          //heading:"",
          label: "City",
          name: "city",
          value: this.dta.city,
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your City" },
          ]
        },
        {
          //heading:"",
          label: "State",
          name: "state",
          type: "select",
          val: this.statesjson,
          value: this.dta.state,
          validations: [
            { rule: 'required', message: "Select Your State" },
          ]
        },
        {
          //heading:"",
          label: "Zip",
          name: "zip",
          value: this.dta.zip,
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Zip Code " },
          ]
        },
        {
          //heading:"",
          label: "Telephone",
          name: "phone",
          value: this.dta.phone,
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Contact Number" },
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
          value: ''
        },
        {
          //heading:"",
          label: "parentid",
          name: "parentid",
          type: 'hidden',
          value: this.dta.parentid
        },
        {
          //heading:"",
          label: "affiliate_id",
          name: "affiliate_id",
          type: 'hidden',
          value: this.dta.affiliate_id
        },
        {
          label: "Password",
          name: "password",
          type: 'hidden',
          value: this.dta.password,
        },
        {
          label: "email",
          name: "email",
          type: 'hidden',
          value: this.dta.email,
        }
      ]
    };
  }
  listenFormFieldChange1(val: any) {
    //// console.log(val);
    console.log('val.feild.name', val.field.name);
    console.log('val.field', val.fieldval);
    if (val.field == 'fromsubmit') {
      if (val.fromval.message != null && val.fromval.message != '') {
        // console.log(val.fromval.message._id);
        this.dialogRef.close();
        this.router.navigateByUrl('success/' + val.fromval.message._id);

      }

    }

    if (val.field.name != 'card_type' && val.field.name != 'card_cc' && val.field.name != 'expyear' && val.field.name != 'card_cvv' && val.field.name != 'expmonth') {
      //console.log('listenFormFieldChange', val);
      // if (val.field.name == 'firstname' || val.field.name == 'lastname' || val.field.name == 'address' || val.field.name == 'city' || val.field.name == 'state' || val.field.name == 'zip') {
      //   this.formarray.push({ val: val.fieldval, name: val.field.name })
      // }

      this.formarray.push({ val: this.dta.firstname, name: 'firstname' },
        { val: this.dta.lastname, name: 'lastname' },
        { val: this.dta.address, name: 'address' },
        { val: this.dta.city, name: 'city' },
        { val: this.dta.state, name: 'state' },
        { val: this.dta.zip, name: 'zip' },
        { val: this.dta.phone, name: 'phone' }
      )
      console.log(this.formarray, '+++++');
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
}