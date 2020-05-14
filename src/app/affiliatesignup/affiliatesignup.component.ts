import { Component, OnInit } from '@angular/core';
// import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affiliatesignup',
  templateUrl: './affiliatesignup.component.html',
  styleUrls: ['./affiliatesignup.component.css']
})
export class AffiliatesignupComponent implements OnInit {
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata:any='';
  // formdata
  formfieldrefresh:boolean=true;
  updatetable:boolean=true;
  formfieldrefreshdata:any=null;
 public formdata:any;
 public parentid:any = '';

  constructor(public _apiService: ApiService,public ActivatedRoute:ActivatedRoute
    // public meta: MetaService
    ) { 
      // window.scrollTo(500, 0); 
    // this.meta.setTitle('DNA Of Success - Affiliates');

    // this.meta.setTag('og:description', 'Become an affiliate TODAY, and make a lot of money with Jack\'s world-famous, “DNA of Success” that has been taught to people in over 50 countries. The program has already paid out over $900,000 in affiliate commissions, and now YOU can also make $$$ with Jack\'s proven system!');
    // this.meta.setTag('twitter:description', 'Become an affiliate TODAY, and make a lot of money with Jack\'s world-famous, “DNA of Success” that has been taught to people in over 50 countries. The program has already paid out over $900,000 in affiliate commissions, and now YOU can also make $$$ with Jack\'s proven system!');

    // this.meta.setTag('og:keyword', 'DNA Master Course Affiliates Login, Affiliates Login DNA Master Course, DNA Of Success Affiliates');
    // this.meta.setTag('twitter:keyword', 'DNA Master Course Affiliates Login, Affiliates Login DNA Master Course, DNA Of Success Affiliates');

    // this.meta.setTag('og:title', 'DNA Of Success - Affiliates');
    // this.meta.setTag('twitter:title', 'DNA Of Success - Affiliates');
    // this.meta.setTag('og:type', 'website');
    // this.meta.setTag('og:url','https://www.dnamastercourse.com/');
    //   this.meta.setTag('og:image', '../../assets/images/logometa.jpg');
    if(this.ActivatedRoute.snapshot.params._id != null && typeof(ActivatedRoute.snapshot.params._id) != "undefined"){
      this.parentid = this.ActivatedRoute.snapshot.params._id;
    }
    this.formdata = {
      successmessage:"Added Successfully !!",
      redirectpath:"/affiliatesignup",
      submittext:"submit",                                  
      submitactive:true, //optional, default true
     apiUrl:this._apiService.nodesslurl,
      endpoint:'api1/addusers',                                                 
     jwttoken:this._apiService.jwtToken,
      fields:[
          {
              heading:"",
              label:"First Name",
              name:"firstname",
              value:'',
              type:"text",
              validations:[
                  {rule:'required',message:"Minimum of 2 Letters required"},
                  // {rule:'maxLength',value:10},
                  // {rule:'minLength',value: 2}
                  ]
          },
          {
            heading:"",
            label:"Last Name",
            name:"lastname",
            value:'',
            type:"text",
            validations:[
                {rule:'required',message:"Minimum of 2 Letters required"},
                //{rule:'maxLength',value:10},
                //{rule:'minLength',value: 2}
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
            value:'',
            type:"text",
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
                {rule:'required',message:"Enter Your Telephone Number"},
                ]
          },
          {
            heading:"",
            label:"Zip",
            name:"zip",
            value:'',
            type:"number",
            validations:[
                {rule:'required',message:"Enter Your Pin Code"},
                ]
          },
          {
              label:"Email",
              name:"email",
              type:'email',
              hint:"abc@gmail.com",
              validations:[
                  {rule:'required',message:"Enter Your Email"},
                  {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}]
          },
          {
            heading:"",
            label:"Website Address",
            name:"website_url",
            value:'',
            type:"text",
            // validations:[
            //     {rule:'required'},
            //     ]
          },
          {
            heading:"",
            label:"About Me",
            name:"About Me",
            value:'',
            type:"textarea",
            // validations:[
            //     {rule:'required'},
            //     ]
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
          //   validations:[
          //       {rule:'required'},
          //       ]
          // },
          {
              label:"Password",
              name:"password",
              type:'password',
              hint:"******",
              validations:[
                  {rule:'required',message:"Password required"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },{
              label:"Confirm Password",
              name:"confirmpassword",
              type:'password',
              hint:"******",
              validations:[
                  {rule:'required',message:"Confirm Password required"},
                  {rule:'match',message:"Confirm Password field Needs to  match Password"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },
          // {
          //     label:"Age",
          //     name:"age",
          //     type:'number',
          //     hint:'dddd',
          //     validations:[
          //         {rule:'required'},
          //         {rule:'min',value:5},
          //         {rule:'max',value:50,message: "Age can't be more than 50 "}
          //         ]
          // } ,
          // {
          //     label:"Active",
          //     name:"status",
          //     hint:'',
          //     type:'checkbox',
          //     val: this.status,
          //     //value: '',
          //     validations:[
          //         {rule:'required'}
          //         ]
          // } ,
          // {
          //     label:"Active",
          //     name:"active",
          //     hint:'check ???',
          //     type:'checkbox',
          //     val: null,
          //     //value: '',
          //     validations:[
          //         {rule:'required'}
          //         ]
          // } ,
          // {
          //     label:"City",
          //     name:"city",
          //     type:'text'
          // },
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"affiliate"
        },
        {
            label:"parentid",
            name:"parentid",
            type:'hidden',
            value:this.parentid
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
  
}
