import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
 


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public selectedProduct:any = {good:0, better:0, best:0, mentor:0};
  public expyear:any=[{val:20,'name':'2020'},{val:21,'name':'2021'},{val:22,'name':'2022'},{val:23,'name':'2023'},{val:24,'name':'2024'}
  ,{val:25,'name':'2025'},{val:26,'name':'2026'},{val:27,'name':'2027'},{val:28,'name':'2028'},{val:29,'name':'2029'},{val:30,'name':'2030'}]
  public productDetails: any = {};
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata:any='';
  // formdata
  formfieldrefresh:boolean=true;
  updatetable:boolean=true;
  formfieldrefreshdata:any=null;
  formarray:any =[];
  public formdata:any;
  public formdata1:any;
  public formdata2:any;
  public statesjson : any =[];
  public pricedata: any;

  constructor(public _apiService: ApiService,public ActivatedRoute:ActivatedRoute,
    public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
    this.meta.setTitle('DNA Of Success - Our Products    ');

    this.meta.setTag('og:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');
    this.meta.setTag('twitter:description', 'Products and packages that help to obtain Jack Zufelt’s incredible program to success and professional mentorship guidance towards achieving your dreams and the Core desires of your heart.');

    this.meta.setTag('og:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');
    this.meta.setTag('twitter:keyword', 'Personal Development Programs, Personal Development Courses, Success Development Programs');

    this.meta.setTag('og:title', 'DNA Of Success - Our Products');
    this.meta.setTag('twitter:title', 'DNA Of Success - Our Products');
    this.meta.setTag('og:url','https://www.dnamastercourse.com/');
    this.meta.setTag('og:image', '../../assets/images/logometa.jpg');

    this._apiService.getState().subscribe((response:any) => {
     // console.log(response)
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name }
        );
      }
    })
    this.formdata = {
      successmessage:"Order Placed Sucessfully!!",
      redirectpath:"/product",
      submittext:"Rush My Order",                                  
      submitactive:true, //optional, default true
     apiUrl:this._apiService.nodesslurl,
      endpoint:'api1/addusers',                                                 
     jwttoken:this._apiService.jwtToken,
      fields:[
        {
          heading:"",
          label:"Package Name",
          name:"packagename",
          value:'',
          disabled: true,
          type:"text",
          
      },
        {
          heading:"",
          label:"Price",
          name:"price",
          value:'',
          type:"text",
          prefix: "Product Total",
        },
        {
          heading:"",
          label:"Delivery",
          name:"delivery",
          value:'',
          type:"number",
          prefix: "Delivery",
        },
        {
          heading:"",
          label:"Promo Code",
          name:"promocode",
          value:'',
          type:"number",
        },
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
            label:"Physical Address",
            name:"address",
            value:'',
            type:"text",
             validations:[
                 {rule:'required', message:"Enter Your Address"},
                 ]
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
            label:"Zip",
            name:"zip",
            value:'',
            type:"number",
            validations:[
                {rule:'required',message:"Enter Your Pin Code "},
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
              label:"Email",
              name:"email",
              type:'email',
              hint:"",
              validations:[
                  {rule:'required',message:"Email field Needs to be required"},
                  {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}]
          },
          {
              label:"Password",
              name:"password",
              type:'password',
              hint:"",
              validations:[
                  {rule:'required',message:"Password field Needs to be required"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },
          {
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
            label: "Use My Billing Address As Shipping Address",
            name: "sameaddress",
            type: 'checkbox',
            value: '',
            validations: [
                { rule: 'required' }
            ]
        },
        {
          heading:"",
          label:"First Name",
          name:"sfirstname",
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
        name:"slastname",
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
        label:"Physical Address",
        name:"saddress",
        value:'',
        type:"text",
         validations:[
             {rule:'required', message:"Enter Your Address"},
             ]
      },
      {
        heading:"",
        label:"City",
        name:"scity",
        value:'',
        type:"text",
        validations:[
            {rule:'required',message:"Enter Your City"},
            ]
      },
      {
        heading:"",
        label:"State",
        name:"sstate",
        type:"select",
        val: this.statesjson,
        validations:[
            {rule:'required',message:"Enter Your State"},
            ]
      },
      {
        heading:"",
        label:"Zip",
        name:"szip",
        value:'',
        type:"number",
        validations:[
            {rule:'required',message:"Enter Your Pin Code "},
            ]
      },
      {
        heading:"",
        label:"Select Your Card",
        name:"others",
        value:'',
        type:"select",
        val: [
          { val: "Others", name: "Others" },
          { val: "Visa", name: "Visa"},
          { val: "Mastercard", name: "Mastercard" },
          { val: "AmericanExpress", name: "AmericanExpress" },
          { val: "Discover", name: "Discover" }
      ],
        validations:[
            {rule:'required', message:"Please Select Your Card"},
            ]
    },
    {
      heading:"",
      label:"CC #",
      name:"ccnumber",
      value:'',
      type:"number",
      validations:[
          {rule:'required',message:"Enter Your CC Number "},
          ]
    },
    {
      heading:"",
      label:"Month",
      name:"month",
      value:'',
      type:"number",
      validations:[
          {rule:'required',message:"Enter Your Validity Month"},
          ]
    },
    {
      heading:"",
      label:"Year",
      name:"expyear",
      value:'',
      val:this.expyear,
      type:"select",
      validations:[
          {rule:'required',message:"Enter Your Validity Year"},
          ]
    },
    {
      heading:"",
      label:"CVV #",
      name:"cvvnumber",
      value:'',
      type:"number",
      validations:[
          {rule:'required',message:"Enter Your CVV NUmber"},
          ]
    },
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"Product"
        },
        {
          label:"status",
          name: "status",
          type: 'hidden',
          value: 1
      }
      ]
  };
  
  }

  ngOnInit() {
  }

  chooseProduct(item, flag){
    console.log(item)
    this.selectedProduct.item = 1 - this.selectedProduct.item;


    if (flag == 'good') {
      this.productDetails.name= 'GOOD';
      this.productDetails.price= 149;
      this.productDetails.delivery= 4.95;

      this.selectedProduct.best = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.mentor = 0;
    }else  if (flag == 'best') {
      this.productDetails.name= 'BEST';
      this.productDetails.price= 500;
      this.productDetails.delivery= 4.95;

      this.selectedProduct.good = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.mentor = 0;
    } else if(flag == 'better'){
      this.productDetails.name= 'BETTER';
      this.productDetails.price= 249;
      this.productDetails.delivery= 0;

      this.selectedProduct.good = 0;
      this.selectedProduct.mentor = 0;
      this.selectedProduct.best = 4.95;
    } else {
      this.productDetails.name= 'MENTOR';
      this.productDetails.price= 600;
      this.productDetails.delivery= 4.95;

      this.selectedProduct.good = 0;
      this.selectedProduct.better = 0;
      this.selectedProduct.best = 0;
    }
  }
  listenFormFieldChange(val: any) {
   // console.log('listenFormFieldChange', val);
    if (val.field.name == 'firstname' || val.field.name == 'lastname' || val.field.name == 'address' || val.field.name == 'city' || val.field.name == 'state' || val.field.name == 'zip') {
      this.formarray.push( {val:val.fieldval,name:val.field.name})
    }
    //console.log(this.formarray,'+++++');
       if (val.field.name == 'sameaddress' && val.fieldval == true) {
    for (let i = 0; i < this.formarray.length; i++) {
      setTimeout(() => {
        this.formfieldrefreshdata = 
        { field: 's'+this.formarray[i].name, value: this.formarray[i].val ,disabled: true} ;
    },50*(i+1));  
    }
  }
  else{
    for (let i = 0; i < this.formarray.length; i++) {
      setTimeout(() => {
        this.formfieldrefreshdata = 
        { field: 's'+this.formarray[i].name, value: '' ,disabled: true} ;
    },50*(i+1));  
    }
  }
  
}

updateformval(Price:any) {
  this.pricedata=Price.textContent
  console.log(Price.textContent);
  //this.formdata.fields[0].value = this.pricedata;
  this.formfieldrefreshdata = { field: 'price', value: this.pricedata };
  // setTimeout(() => {
  //     this.formfieldrefreshdata = { field: 'email', value: this.temtdata + '@gmail.com' },
  //     { field: 'desc', value: this.formdata.fields[0].value };
  // }, 50);
  this.updatetable = !this.updatetable;

}
}
