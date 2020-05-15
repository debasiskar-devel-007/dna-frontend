import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
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
      redirectpath:"/landingpage",
      submittext:"Submit",                                  
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
                  {rule:'required', message:"Minimum of 2 Letters required"},
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
            // validations:[
            //     {rule:'required'},
            //     ]
          },
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"landingpage"
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
