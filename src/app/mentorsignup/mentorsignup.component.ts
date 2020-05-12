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
               // {rule:'maxLength',value:10},
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
          {
            heading:"",
            label:"notes",
            name:"notes",
            value:'',
            type:"textarea",
            // validations:[
            //     {rule:'required'},
            //     ]
          },
          {
            heading:"",
            label:"User Name",
            name:"username",
            value:'',
            type:"text",
            // validations:[
            //     {rule:'required'},
            //     ]
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
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"mentor"
        },
        {
            label:"id",
            name:"id",
            type:'hidden',
            value:""
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
