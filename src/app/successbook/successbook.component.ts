import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaService } from '@ngx-meta/core';
import {CookieService} from 'ngx-cookie-service';


export interface DialogData {
  allData: any;
}

@Component({
  selector: 'app-successbook',
  templateUrl: './successbook.component.html',
  styleUrls: ['./successbook.component.css']
})
export class SuccessbookComponent implements OnInit {
  public productDetails: any = {};
  public saletax: any;
  public statesjson: any = [];
  public parentid: any;
  public shareUser: any;
  formarray: any = [];

  // form start here
  public accountDetails: any = [];
  public formfieldrefreshdata: any;
  public formfieldrefresh: any;
  public stateVal: any = [];
  public user_type: any;
  public form1: boolean = true;
  public form2: boolean = false;
  public form3: boolean = false;
  public form4: boolean = false;
  public active1: boolean = false;
  public active2: boolean = false;
  public active3: boolean = false;
  formdata1:any={}
  public form1Value: any=[];
  public form2Value: any;
  public form3Value: any;
  public form4Value: any;
  public menteeSignupData: any = [];
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
        //hint: '******',
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
        // hint: '******',
        validations: [
          { rule: 'required', message: 'Your provided Password must contain at-least one Uppercase letter, one Lower case letter, and one Number' },
          // { rule: 'match', message: 'Confirm Password field Needs to  match Password' },
          { rule: 'pattern', value: this.passwordregex, message: 'Must contain a Capital Letter and a Number' }
        ]
      },
      {
        label: 'productdetails',
        name: 'productDetails',
        type: 'hidden',
        value: this.productDetails
      }

    ]
  };
  // 2nd form start here
 

  // form 3
  formdata2: any = {
    successmessage: 'Banner added Successfully !!',
    redirectpath: '',
    submitactive: true, // optional, default true
    submittext: 'Next',
    jwttoken: '',
    fields: [
      {
        //heading:"",
        label: "Use My Billing Address As Shipping Address",
        name: "sameaddress",
        type: 'checkbox',
        value: '',
      },
      {
        label: 'First Name',
        name: 'shipping_firstname',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'First Name is required' },

        ]
      },
      {
        label: 'Last Name',
        name: 'shipping_lastname',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'Last Name is required' },

        ]
      },
      {
        label: "address",
        name: "shipping_address",
        type: "text",
        value: '',
        validations: [
          { rule: 'required', message: "Select Your State" },
        ]
      },
      {
        //heading:"",
        label: "State",
        name: "shipping_state",
        type: "select",
        val: this.statesjson,
        value: '',
        validations: [
          { rule: 'required', message: "Select Your State" },
        ]
      },
      {
        label: 'City',
        name: 'shipping_city',
        hint: '',
        type: 'text',
        val: '',
        validations: [
          { rule: 'required', message: 'City is required' }
        ],
      },
      {
        label: 'Zip',
        name: 'shipping_zip',
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
    jwttoken: '',

    fields: [
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
        type: 'number',
        val: '',
        validations: [
          { rule: 'required', message: 'CC is required' }
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
        type: 'number',
        val: '',
        validations: [
          { rule: 'required', message: 'CVV is required' }
        ],
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
      }

    ]
  };
  constructor(
    public dialog: MatDialog,
    public _apiService: ApiService,
    public ActivatedRoute: ActivatedRoute,
    private meta: MetaService,public router:Router,public cookieService:CookieService ,public _snackBar: MatSnackBar) {

    this.meta.setTitle('DNA Of Success - Jack M. Zufelt');
    this.meta.setTag('og:description', "Introducing the Second Edition of Jack M. Zufelt’s International Best-Seller, “The DNA of Success”, with his one-of-a-kind concept to achieving the truest desires. Jack’s methods and concepts are backed by scientific evidence and studies and have been proven to create incredible results.");

    this.meta.setTag('twitter:description', "Introducing the Second Edition of Jack M. Zufelt’s International Best-Seller, “The DNA of Success”, with his one-of-a-kind concept to achieving the truest desires. Jack’s methods and concepts are backed by scientific evidence and studies and have been proven to create incredible results.");

    this.meta.setTag('og:keyword', "Jack Zufelt’s The DNA of Success, The DNA of Success Jack M. Zufelt, The DNA of Success Second Edition");

    this.meta.setTag('twitter:keyword', "Jack Zufelt’s The DNA of Success, The DNA of Success Jack M. Zufelt, The DNA of Success Second Edition");

    this.meta.setTag('og:title', 'DNA Of Success - Jack M. Zufelt');
    this.meta.setTag('twitter:title', 'DNA Of Success - Jack M. Zufelt');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://dna.influxiq.com/successbook');
    this.meta.setTag('og:image', 'https://dna.influxiq.com/assets/images/default_image.jpg');



    this.productDetails.name = 'The Second Edition of the “DNA Of Success”';
    this.productDetails.price = 0;
    this.productDetails.delivery = 6.95;
    this.saletax = this.productDetails.price / 100 * 6;
    this.saletax = parseFloat(this.saletax.toFixed(2));
    this.productDetails.saletax = this.saletax;
    this.productDetails.subtotal = this.productDetails.price * 1;
    this.productDetails.total = this.productDetails.subtotal + this.saletax + this.productDetails.delivery;
    this.productDetails.total = parseFloat(this.productDetails.total.toFixed(2));
    this.productDetails.usertype = 'mentee';
    this.productDetails.webinarid = [null];
    this.productDetails.webinar_credit ="1";

    this._apiService.getState().subscribe((response: any) => {

      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },

        );
      }
    })
    if (this.ActivatedRoute.snapshot.params._id != null && typeof (ActivatedRoute.snapshot.params._id) != "undefined") {
      this.parentid = this.ActivatedRoute.snapshot.params._id;
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.shareUser = resolveData.Data.results.res[0]
        // console.log(this.shareUser,resolveData);
      });
    }
  }

  ngOnInit() {
    setTimeout(() => {
      // console.log(this.shareUser)
      if (this.shareUser != null && this.shareUser != '') {
        this.formfieldrefreshdata = {
          field: 'addfromcontrol',
          value: {
            label: 'parenttype',
            name: 'parenttype',
            type: 'hidden',
            after: 'status',
            value: this.shareUser.type
          }
        };

        //affiliate
        if (this.shareUser.type == 'affiliate') {
          this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: {
              label: 'affiliate_id',
              name: 'affiliate_id',
              type: 'hidden',
              after: 'email',
              value: this.shareUser._id
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
              after: 'email',
              value: this.shareUser._id
            }
          };
        }
      }

    }, 3000);
  }
  goToHome() { }


  scroll() {


    document.querySelector('.top_body_right').scrollIntoView({ behavior: 'smooth', });

  }

  // terms and condition modal
  termsModal() {
    // window.scrollTo(0, 0);


    const dialogRef = this.dialog.open(TermsandConditionSB, {

      // width: '250px',
      panelClass: ['footermodal'],

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  privacyModal() {
    // window.scrollTo(0, 0);

    const dialogRef = this.dialog.open(PrivacyPolicySB, {
      // width: '250px',
      panelClass: ['footermodal'],

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  AddONModal(val: any) {
    // window.scrollTo(0, 0);

    const dialogRef = this.dialog.open(AddON, {
      // width: '250px',
      panelClass: ['AddONWrapper'],
      data: val

    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      if (result == 'email error') {
        this.form1 = true;
        this.form2 = false;
        this.form3 = false;
        this.form4 = false;
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        // console.log(this.form1Value);

      }
    });
  }

  listenFormFieldChange(val: any) {
    if (val.field == 'fromsubmit') {
      this.active1 = true;
      this.form1 = false;
      this.form2 = true;
      this.form1Value = val.fromval;
      this.menteeSignupData.push(this.form1Value);
    }
    this.form1Value=val.fromval;
    this.formdata1 = {
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
          value:this.form1Value.firstname,
          type: 'text',
          validations: [
            { rule: 'required', message: 'First Name is required' },
  
          ]
        },
        {
          label: 'Last Name',
          name: 'lastname',
          value: this.form1Value.lastname,
          type: 'text',
          validations: [
            { rule: 'required', message: 'Last Name is required' },
          ]
        },
        {
          label: "Address",
          name: "address",
          type: "text",
          value: '',
          validations: [
            { rule: 'required', message: "Select Your State" },
          ]
        },
        {
          //heading:"",
          label: "State",
          name: "state",
          type: "select",
          val: this.statesjson,
          value: '',
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
        },
  
  
      ]
    };
  }
  listenFormFieldChange1(val: any) {
    if (val.field == 'fromsubmit') {
      this.active2 = true;
      this.form1 = false;
      this.form2 = false;
      this.form3 = true;
      this.form2Value = val.fromval;
      this.menteeSignupData.push(this.form2Value);

    }
  }

  listenFormFieldChange2(val: any) {
    if (val.field.name != 'card_type' && val.field.name != 'card_cc' && val.field.name != 'expyear' && val.field.name != 'card_cvv' && val.field.name != 'expmonth') {

      this.formarray.push({ val: this.menteeSignupData[0].firstname, name: 'firstname' },
        { val: this.menteeSignupData[0].lastname, name: 'lastname' },
        { val: this.menteeSignupData[1].address, name: 'address' },
        { val: this.menteeSignupData[1].city, name: 'city' },
        { val: this.menteeSignupData[1].state, name: 'state' },
        { val: this.menteeSignupData[1].zip, name: 'zip' },

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
    if (val.field == 'fromsubmit') {
      this.active3 = true;
      this.form1 = false;
      this.form2 = false;
      this.form3 = false;
      this.form4 = true;
      this.form3Value = val.fromval;
      this.menteeSignupData.push(this.form3Value);

    }
  }
  listenFormFieldChange3(val: any) {
    if (val.field == 'fromsubmit') {

      this.form1 = false;
      this.form2 = false;
      this.form3 = false;
      // this.form4=false;
      this.form4Value = val.fromval;
      this.menteeSignupData.push(this.form4Value);
      // console.log("submitted data",this.menteeSignupData);
      let data: any = {
        "productDetails": this.menteeSignupData[0].productDetails,
        "firstname": this.menteeSignupData[0].firstname,
        "lastname": this.menteeSignupData[0].lastname,
        "address": this.menteeSignupData[1].address,
        "city": this.menteeSignupData[1].city,
        "state": this.menteeSignupData[1].state,
        "zip": this.menteeSignupData[1].zip,
        "phone": this.menteeSignupData[0].phoneno,
        "email": this.menteeSignupData[0].email,
        "password": this.menteeSignupData[0].password,
        "confirmpassword": this.menteeSignupData[0].confirmpassword,

        "shipping_firstname": this.menteeSignupData[2].shipping_firstname,
        "shipping_lastname": this.menteeSignupData[2].shipping_lastname,
        "shipping_address": this.menteeSignupData[2].shipping_address,
        "shipping_city": this.menteeSignupData[2].shipping_city,
        "shipping_state": this.menteeSignupData[2].shipping_state,
        "shipping_zip": this.menteeSignupData[2].shipping_zip,

        "card_type": this.menteeSignupData[3].card_type,
        "card_cc": this.menteeSignupData[3].cc,
        "expmonth": this.menteeSignupData[3].expmonth,
        "expyear": this.menteeSignupData[3].expyear,
        "card_cvv": this.menteeSignupData[3].cvv,
        "status": this.menteeSignupData[3].status,
        "order_status": this.menteeSignupData[3].order_status,
        "transactiontype": this.menteeSignupData[3].transactiontype,
        "parentid": this.menteeSignupData[0].parentid,
        "affiliate_id": this.menteeSignupData[0].affiliate_id
      }

      this._snackBar.open('Please Wait To Continue.....!', '', {
        duration: 1300,
      });

      // this.AddONModal(data);
      console.log(data,'data')
      this.cookieService.set('data',JSON.stringify(data))
      setTimeout(() => {
      this.router.navigateByUrl('/completed-success');
      }, 1500);
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: ' AddON-dialog',
  templateUrl: 'Add-On.html',
})
export class AddON {
  public value: any = null;
  public dat: any = [];
  constructor(
    public dialogRef: MatDialogRef<AddON>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public _snackBar: MatSnackBar, public apiService: ApiService, public router: Router) {
    // console.log('modalData',data)
    this.dat = data;
  }
  continue() {
    console.log(this.value);
    if (this.value != null) {
      this.dat.productDetails.usertype = this.value
    }else{
      this._snackBar.open('Please Select an Option to Continue', '', {
        duration: 2000,
      });
      return;
    }

    // console.log('value',this.value);
    //console.log('dat',this.dat)
    let cartdata: any = {
      "data": this.dat
    }
  // console.warn(cartdata);
 
    this.apiService.customRequest1(cartdata, 'api/order', environment['api_url']).subscribe((res: any) => {
      console.warn(res);
      if (res.status == 'success') {
        this.router.navigateByUrl('success/' + res.message._id);
        this.dialogRef.close();
      }
       if(res.status=='error'){
        this._snackBar.open(res.errormessage, '', {
          duration: 2000,
        });
        this.dialogRef.close('email error');
      }

    });
    //  this.dialogRef.close();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}