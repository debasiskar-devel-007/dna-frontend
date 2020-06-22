import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ActivatedRoute,Router } from '@angular/router';
// import * as console from 'console';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-successbook',
  templateUrl: './successbook.component.html',
  styleUrls: ['./successbook.component.css']
})
export class SuccessbookComponent implements OnInit {
  public productDetails:any=[];
  public saletax:any;
  public statesjson:any=[];
  public parentid:any;
  public shareUser:any;
  // form start here
  public accountDetails:any=[];
public formfieldrefreshdata:any;
public formfieldrefresh:any;
public stateVal:any=[];
public user_type:any;
public form1:boolean=true;
public form2:boolean=false;
public form3:boolean=false;
public form4:boolean=false;
public form1Value:any;
public form2Value:any;
public form3Value:any;
public form4Value:any;
passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
public expyear: any = [{ val: 20, 'name': '2020' }, { val: 21, 'name': '2021' }, { val: 22, 'name': '2022' }, { val: 23, 'name': '2023' }, { val: 24, 'name': '2024' }
    , { val: 25, 'name': '2025' }, { val: 26, 'name': '2026' }, { val: 27, 'name': '2027' }, { val: 28, 'name': '2028' }, { val: 29, 'name': '2029' }, { val: 30, 'name': '2030' }]
  public expmonth: any = [{ val: '01', 'name': 'JANUARY' }, { val: '02', 'name': 'FEBRUARY' }, { val: '03', 'name': 'MARCH' }, { val: '04', 'name': 'APRIL' }, { val: '05', 'name': 'MAY' }
    , { val: '06', 'name': 'JUNE' }, { val: '07', 'name': 'JULY' }, { val: '08', 'name': 'AUGUST' }, { val: '09', 'name': 'SEPTEMBER' }, { val: '10', 'name': 'OCTOBER' }, { val: '11', 'name': 'NOVEMBER' }
    , { val: '12', 'name': 'DECEMBER' }];
formdata: any = {
  successmessage: 'Banner added Successfully !!',
  redirectpath: '',
  submitactive: true, // optional, default true
  submittext: 'Next',
  // resettext: 'Reset',
  // canceltext: 'Cancel',
  // apiUrl: this._apiService.api_url,
  // endpoint: 'api1/test',
  jwttoken: '',
  // cancelroute: '/manage-banner',

  fields: [
    {
      label: 'First Name',
      name: 'firstname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'First Name is required' },
        
      ]
    },
    {
      label: 'Last Name',
      name: 'lastname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'Last Name is required' },
        
      ]
    },
   {
      label: 'Email',
      name: 'email',
      type: 'email',
      value: '',
      validations: [
        { rule: 'required', message: 'Email is required' },
      ]
    },
    {
      label: 'Phone No',
      name: 'phoneno',
      hint: '',
      type: 'number',
      val: '',
      validations: [
        { rule: 'required', message: 'Phone number is required' }
      ],
    },
    {
      label: 'New Password',
      name: 'password',
      type: 'password',
      hint: '******',
     // value: response.result[0].password,

      validations: [
        { rule: 'required', message: 'Your provided Password must contain at-least one Uppercase letter, one Lower case letter, and one Number' },
        { rule: 'pattern', value: this.passwordregex, message: 'Must contain a Capital Letter and a Number' }
      ]
    },
    {
      label: 'Confirm Password',
      name: 'confirmpassword',
      type: 'password',
      hint: '******',
      validations: [
        { rule: 'required', message: 'Your provided Password must contain at-least one Uppercase letter, one Lower case letter, and one Number' },
        // { rule: 'match', message: 'Confirm Password field Needs to  match Password' },
        { rule: 'pattern', value: this.passwordregex, message: 'Must contain a Capital Letter and a Number' }
      ]
    }

  ]
};
// 2nd form start here
formdata1: any = {
  successmessage: 'Banner added Successfully !!',
  redirectpath: '',
  submitactive: true, // optional, default true
  submittext: 'Next',
  // resettext: 'Reset',
  // canceltext: 'Cancel',
  // apiUrl: this._apiService.api_url,
  // endpoint: 'api1/test',
  jwttoken: '',
  // cancelroute: '/manage-banner',

  fields: [
    {
      label: 'First Name',
      name: 'firstname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'First Name is required' },
        
      ]
    },
    {
      label: 'Last Name',
      name: 'lastname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'Last Name is required' },
        
      ]
    },
    {
      //heading:"",
      label: "State",
      name: "state",
      type: "select",
      val:this.statesjson,
      value:'',
      validations: [
        { rule: 'required', message: "Select Your State" },
      ]
    },
    {
      label: 'City',
      name: 'city',
      hint: '',
      type: 'text',
      val: '',
      validations: [
        { rule: 'required', message: 'City is required' }
      ],
    },
    {
      label: 'Zip',
      name: 'zip',
      hint: '',
      type: 'number',
      val: '',
      validations: [
        { rule: 'required', message: 'Zip is required' }
      ],
    }

  ]
};

// form 3
formdata2: any = {
  successmessage: 'Banner added Successfully !!',
  redirectpath: '',
  submitactive: true, // optional, default true
  submittext: 'Next',
  // resettext: 'Reset',
  // canceltext: 'Cancel',
  // apiUrl: this._apiService.api_url,
  // endpoint: 'api1/test',
  jwttoken: '',
  // cancelroute: '/manage-banner',

  fields: [
    {
      label: 'First Name',
      name: 'firstname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'First Name is required' },
        
      ]
    },
    {
      label: 'Last Name',
      name: 'lastname',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'Last Name is required' },
        
      ]
    },
    {
      //heading:"",
      label: "State",
      name: "state",
      type: "select",
      val:this.statesjson,
      value:'',
      validations: [
        { rule: 'required', message: "Select Your State" },
      ]
    },
    {
      label: 'City',
      name: 'city',
      hint: '',
      type: 'text',
      val: '',
      validations: [
        { rule: 'required', message: 'City is required' }
      ],
    },
    {
      label: 'Zip',
      name: 'zip',
      hint: '',
      type: 'number',
      val: '',
      validations: [
        { rule: 'required', message: 'Zip is required' }
      ],
    }

  ]
};
// form 4
formdata3: any = {
  successmessage: 'Banner added Successfully !!',
  redirectpath: '',
  submitactive: true, // optional, default true
  submittext: 'Next',
  // resettext: 'Reset',
  // canceltext: 'Cancel',
  // apiUrl: this._apiService.api_url,
  // endpoint: 'api1/test',
  jwttoken: '',
  // cancelroute: '/manage-banner',

  fields: [
    {
      label: 'We accept',
      name: 'is_acept',
      value: '',
      type: 'text',
      validations: [
        { rule: 'required', message: 'We accept is required' },
        
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
      label: 'CC',
      name: 'cc',
      hint: '',
      type: 'text',
      val: '',
      validations: [
        { rule: 'required', message: 'CC is required' }
      ],
    },
    {
      label: 'Expiration Date',
      name: 'expirationdate',
      hint: '',
      type: 'number',
      val: '',
      validations: [
        { rule: 'required', message: 'Expiration Date is required' }
      ],
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
      label: 'CVV',
      name: 'cvv',
      hint: '',
      type: 'text',
      val: '',
      validations: [
        { rule: 'required', message: 'CVV is required' }
      ],
    }

  ]
};
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
    this.productDetails.usertype='mentor';
    this.productDetails.webinarid=[null];
    
    this._apiService.getState().subscribe((response:any) => {
      console.log("testing",response);
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
         
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
  }

  ngOnInit() {
  }
  goToHome(){} 


  scroll() {
    

    document.querySelector('.top_body_right').scrollIntoView({ behavior: 'smooth', });

  }

  // terms and condition modal
  termsModal(){
    // window.scrollTo(0, 0);
 

    const dialogRef = this.dialog.open(TermsandConditionSB, { 
      
     // width: '250px',
     panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  privacyModal(){
    // window.scrollTo(0, 0);
    
    const dialogRef = this.dialog.open(PrivacyPolicySB, {
      // width: '250px',
      panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  AddONModal(){
    // window.scrollTo(0, 0);
    
    const dialogRef = this.dialog.open(AddON, {
      // width: '250px',
      panelClass: ['AddONWrapper'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  listenFormFieldChange(val: any) {
    console.log("form 1 submit value",val);
    this.form1Value = val.fromval;
    console.log("form 1 submit value",this.form1Value);

    if (val.field == 'fromsubmit') {
      this.form1=false;
      this.form2=true;
    }
  }
  listenFormFieldChange1(val: any) {
    this.form2Value = val.fromval;
    if (val.field == 'fromsubmit') {
      this.form1=false;
      this.form2=false;
      this.form3=true;
    }
  }
  listenFormFieldChange2(val: any) {
    this.form3Value = val.fromval;
    if (val.field == 'fromsubmit') {
      this.form1=false;
      this.form2=false;
      this.form3=false;
      this.form4=true;
    }
  }
  listenFormFieldChange3(val: any) {
    this.form4Value = val.fromval;
    if (val.field == 'fromsubmit') {
      this.form1=false;
      this.form2=false;
      this.form3=false;
      this.form4=false;
    }
  }
}
 


@Component({
  selector: 'terms-dialog',
  templateUrl: 'terms&condition.html',
})
export class TermsandConditionSB {

  constructor(
    public dialogRef: MatDialogRef<TermsandConditionSB>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'privacy-dialog',
  templateUrl: 'privacy&policy.html',
})
export class PrivacyPolicySB {

  constructor(
    public dialogRef: MatDialogRef<PrivacyPolicySB>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: ' AddON-dialog',
  templateUrl: 'Add-On.html',
})
export class  AddON {

  constructor(
    public dialogRef: MatDialogRef<AddON>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}