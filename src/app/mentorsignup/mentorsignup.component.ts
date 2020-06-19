import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
// import * as console from 'console';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  public saletax:number;
  total:number;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata:any='';
  // formdata
  formfieldrefresh:boolean=true;
  updatetable:boolean=true;
  formfieldrefreshdata:any=null;
  public formdata:any;
  public statesjson : any =[];
  public parentid:any = '';
  public shareUser:any =[];
  constructor(public dialog: MatDialog,public _apiService: ApiService,public ActivatedRoute:ActivatedRoute ) {
    this.productDetails.name = 'Mentor Package for $749"';
    this.productDetails.price = 0;
    this.productDetails.delivery = 6.95;
    this.saletax = this.productDetails.price / 100 * 6;
    this.saletax = parseFloat(this.saletax.toFixed(2));
    this.productDetails.saletax = this.saletax;
    this.productDetails.subtotal = this.productDetails.price * 1;
    this.productDetails.total = this.productDetails.subtotal + this.saletax + this.productDetails.delivery;
    this.productDetails.total = parseFloat(this.productDetails.total.toFixed(2));
    this.total = this.productDetails.total;
    
    console.log(this.productDetails)
    this._apiService.getState().subscribe((response:any) => {
     // console.log(response)
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
          //{ 'val': response[i].name, 'name': response[i].name }
        );
      }
    })
    if(this.ActivatedRoute.snapshot.params._id != null && typeof(ActivatedRoute.snapshot.params._id) != "undefined"){
      this.parentid = this.ActivatedRoute.snapshot.params._id;
      this.ActivatedRoute.data.subscribe((resolveData:any) => {
       this.shareUser=resolveData.Data.results.res[0]
       // console.log(this.shareUser,resolveData);
      });
    }
    this.formdata = {
      successmessage:"Added Successfully !!",
      redirectpath:"",
      submittext:"Submit",                                  
      submitactive:true, //optional, default true
    //  apiUrl:this._apiService.nodesslurl,
    //  endpoint:'api/temptable',                                                 
     jwttoken:this._apiService.jwtToken,
      fields:[
          {
              heading:"",
              label:"First Name",
              name:"firstname",
              value:'',
              type:"text",
              validations:[
                  {rule:'required', message:"Enter Your First Name"},
                   {rule:'maxLength',value:10,message:"Maximum of 15 Letters"},
                   {rule:'minLength',value: 2, message:"Minimum 2 Letters Required"}
                  ]
          },
          {
            heading:"",
            label:"Last Name",
            name:"lastname",
            value:'',
            type:"text",
            validations:[
                {rule:'required',message:"Enter Your Last Name"},
                {rule:'maxLength',value:10,message:"Maximum Of 15 Letters"},
                {rule:'minLength',value: 2 , message:"Minimum 2 Letters Required"}
                ]
          },
          {
            heading:"",
            label:"Business Name",
            name:"company",
            value:'',
            type:"text",
            // validations:[
            //     {rule:'required'},
            //     {rule:'maxLength',value:10},
            //     {rule:'minLength',value: 2}
            //     ]
          },
          {
            heading:"",
            label:"Physical Address",
            name:"address",
            value:'',
            type:"text",
            // validations:[
            //     {rule:'required'},
            //     ]
          },
          {
            heading:"",
            label:"City",
            name:"city",
            value:'',
            type:"text",
            validations:[
                {rule:'required',message:"Enter Your City"},
                ]
          },
          {
            heading:"",
            label:"State",
            name:"state",
            type:"select",
            val: this.statesjson,
            validations:[
                {rule:'required',message:"Enter Your State"},
                ]
          },
          {
            heading:"",
            label:"Telephone",
            name:"phone",
            value:'',
            type:"number",
            validations:[
                {rule:'required',message:"Enter Your Contact Number"},
                ]
          },
          {
            heading:"",
            label:"Zip",
            name:"zip",
            value:'',
            type:"number",
            validations:[
                {rule:'required',message:"Enter Your Pin Code "},
                ]
          },
          {
              label:"Email",
              name:"email",
              type:'email',
              hint:"",
              validations:[
                  {rule:'required',message:"Email field Needs to be required"},
                  {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}]
          },
          {
            heading:"",
            label:"Notes",
            name:"notes",
            value:'',
            type:"textarea",
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
              label:"Password",
              name:"password",
              type:'password',
              hint:"",
              validations:[
                  {rule:'required',message:"Password field Needs to be required"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },{
              label:"Confirm Password",
              name:"confirmpassword",
              type:'password',
              hint:"",
              validations:[
                  {rule:'required',message:"Confirm Password field Needs to be required"},
                  {rule:'match',message:"Confirm Password field Needs to  match Password"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"mentor"
        },
        {
          label:"status",
          name: "status",
          type: 'hidden',
          value: 1
      },
      {
        label:"type",
        name:"product",
        type:'hidden',
        value:this.productDetails
      }
      ]
  };

   }

  ngOnInit() {
    if(this.ActivatedRoute.snapshot.params._id != null && typeof(this.ActivatedRoute.snapshot.params._id) != "undefined"){
    setTimeout(() => {
       console.log(this.shareUser)
       console.log(this.shareUser.type)

       if(this.shareUser.type=='affiliate'){
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
       if(this.shareUser.type=='mentor'){
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
  openDialog(val:any) {
    const dialogRef = this.dialog.open(formModal, {
      width: '',
      data:val,
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
  public dta:any =[];
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
  formarray: any = [];
  public formdata: any;
  public formdata1: any;
  public formdata2: any;
  public statesjson: any = [];
  constructor(
    public dialogRef: MatDialogRef<formModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public activatedRoute: ActivatedRoute, public apiService: ApiService) {
      this.apiService.getState().subscribe((response:any) => {
        // console.log(response)
         for (let i in response) {
           this.statesjson.push(
             { 'val': response[i].abbreviation, 'name': response[i].name },
             //{ 'val': response[i].name, 'name': response[i].name }
           );
         }
       })
      this.dta=data;
      console.log(data)
      console.log(this.dta)
      console.log(this.dta.firstname)
      this.formdata = {
        successmessage: "Order Placed Sucessfully!!",
        //redirectpath:"/product",
        submittext: "Rush My Order",
        submitactive: true, //optional, default true
        apiUrl:'',
        // canceltext:"Cancel Now",
        //resettext:"Reset This",
        endpoint: 'api/order',
        jwttoken: '',
        fields: [
          {
            label: 'productdetails',
            name: 'productDetails',
            type: 'hidden',
            value: ''
          },
          {
            //heading:"",
            label: "Billing Name",
            name: "firstname",
            value:this.dta.firstname,
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
            value:this.dta.lastname,
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
            value:this.dta.address,
            type: "text",
            validations: [
              { rule: 'required', message: "Enter Your Address" },
            ]
          },
          {
            //heading:"",
            label: "City",
            name: "city",
            value:this.dta.city,
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
            val:this.statesjson,
            value:this.dta.state,
            validations: [
              { rule: 'required', message: "Select Your State" },
            ]
          },
          {
            //heading:"",
            label: "Zip",
            name: "zip",
            value:this.dta.zip,
            type: "number",
            validations: [
              { rule: 'required', message: "Enter Your Zip Code " },
            ]
          },
          {
            //heading:"",
            label: "Telephone",
            name: "phone",
            value:this.dta.phone,
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
            val: '',
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
            val: '',
            validations: [
              { rule: 'required', message: "Enter Your Validity Month" },
            ]
          },
          {
            //heading:"",
            label: "Year",
            name: "expyear",
            value: '',
            val:'',
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
    }
    listenFormFieldChange(val: any) {
      //// console.log(val);
      if (val.field == 'fromsubmit') {
        // if (val.fromval.message != null && val.fromval.message != '') {
        //   // console.log(val.fromval.message._id);
        //   this.router.navigateByUrl('success/' + val.fromval.message._id);
  
        // }
  
      }
  
      if (val.field.name != 'card_type' && val.field.name != 'card_cc' && val.field.name != 'expyear' && val.field.name != 'card_cvv' && val.field.name != 'expmonth') {
        //console.log('listenFormFieldChange', val);
        if (val.field.name == 'firstname' || val.field.name == 'lastname' || val.field.name == 'address' || val.field.name == 'city' || val.field.name == 'state' || val.field.name == 'zip') {
          this.formarray.push({ val: val.fieldval, name: val.field.name })
        }
        console.log(this.formarray,'+++++');
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