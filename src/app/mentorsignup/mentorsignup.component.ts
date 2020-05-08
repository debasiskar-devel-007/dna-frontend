import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.css']
})
export class MentorsignupComponent implements OnInit {
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata:any='';
  // formdata
  formfieldrefresh:boolean=true;
  updatetable:boolean=true;
  formfieldrefreshdata:any=null;
 public formdata:any;


  constructor(public _apiService: ApiService,public ActivatedRoute:ActivatedRoute) {
    this.formdata = {
      successmessage:"Added Successfully !!",
      redirectpath:"/mentorsignup",
      submittext:"submit",                                  
      submitactive:true, //optional, default true
     apiUrl:this._apiService.nodesslurl,
      endpoint:'api1/addusers',                                                 // add user
     jwttoken:this._apiService.jwtToken,
      fields:[
          {
              heading:"",
              label:"First Name",
              name:"firstname",
              value:'',
              type:"text",
              validations:[
                  {rule:'required'},
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
                {rule:'required'},
                {rule:'maxLength',value:10},
                {rule:'minLength',value: 2}
                ]
          },
          {
            heading:"",
            label:"Business Name",
            name:"company",
            value:'',
            type:"text",
            validations:[
                {rule:'required'},
                {rule:'maxLength',value:10},
                {rule:'minLength',value: 2}
                ]
          },
          {
            heading:"",
            label:"Physical Address",
            name:"address",
            value:'',
            type:"text",
            validations:[
                {rule:'required'},
                ]
          },
          {
            heading:"",
            label:"City",
            name:"city",
            value:'',
            type:"text",
            validations:[
                {rule:'required'},
                ]
          },
          {
            heading:"",
            label:"State",
            name:"state",
            value:'',
            type:"text",
            validations:[
                {rule:'required'},
                ]
          },
          {
            heading:"",
            label:"Telephone",
            name:"phone",
            value:'',
            type:"number",
            validations:[
                {rule:'required'},
                ]
          },
          {
            heading:"",
            label:"Zip",
            name:"zip",
            value:'',
            type:"number",
            validations:[
                {rule:'required'},
                ]
          },
          {
              label:"Email",
              name:"email",
              type:'email',
              hint:"abc@gmail.com",
              validations:[
                  {rule:'required',message:"Email field Needs to be required"},
                  {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}]
          },
          // {
          //   heading:"",
          //   label:"Website Address",
          //   name:"website_url",
          //   value:'',
          //   type:"text",
          //   validations:[
          //       {rule:'required'},
          //       ]
          // },
          // {
          //   heading:"",
          //   label:"about_me",
          //   name:"",
          //   value:'',
          //   type:"textarea",
          //   validations:[
          //       {rule:'required'},
          //       ]
          // },
          {
            heading:"",
            label:"notes",
            name:"",
            value:'',
            type:"textarea",
            validations:[
                {rule:'required'},
                ]
          },
          {
            heading:"",
            label:"User Name",
            name:"username",
            value:'',
            type:"text",
            validations:[
                {rule:'required'},
                ]
          },
          {
              label:"Password",
              name:"password",
              type:'password',
              hint:"******",
              validations:[
                  {rule:'required',message:"Password field Needs to be required"},
                  {rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                  ]
          },{
              label:"Confirm Password",
              name:"confirmpassword",
              type:'password',
              hint:"******",
              validations:[
                  {rule:'required',message:"Confirm Password field Needs to be required"},
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
            value:"admin"
        },
        {
            label:"id",
            name:"_id",
            type:'hidden',
            value:""
        }
      ]
  };

   }

  ngOnInit() {
  }

}
