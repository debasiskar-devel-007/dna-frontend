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
 public parentid:any = '';
 public shareUser:any =[];
  constructor(public _apiService: ApiService,public ActivatedRoute:ActivatedRoute) {
    if(this.ActivatedRoute.snapshot.params._id != null && typeof(ActivatedRoute.snapshot.params._id) != "undefined"){
      this.parentid = this.ActivatedRoute.snapshot.params._id;
      this.ActivatedRoute.data.subscribe((resolveData:any) => {
       this.shareUser=resolveData.Data.results.res[0]
       // console.log(this.shareUser,resolveData);
      });
    }

    this.formdata = {
      successmessage:"Added Successfully !!",
      redirectpath:"/pages/products",
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
                  {rule:'required', message:"Enter Your First Name"},
                  {rule:'maxLength',value:10, message:"Maximum 10 letters"},
                  {rule:'minLength',value: 2, message:"Minimun 2 letters"}
                  ]
          },
          {
            heading:"",
            label:"Last Name",
            name:"lastname",
            value:'',
            type:"text",
            validations:[
                {rule:'required', message:"Enter Your last Name"},
                {rule:'maxLength',value:10, message:"Maximum 10 letters"},
                {rule:'minLength',value: 2, message:"Minimum 2 letters"}
                ]
          },
          {
            label:"Email",
            name:"email",
            type:'email',
            hint:"",
            validations:[
                {rule:'required',message:"Enter Your Email"},
                {rule:'pattern',value: this.emailregex,message: "Must be a valid Email"}]
        },
        {
          heading:"",
          label:"Telephone",
          name:"contactnumber",
          value:'',
          type:"number",
          validations:[
              {rule:'required',message:"Enter Your Contact Number"},
              ]
        },
          {
            label:"type",
            name:"type",
            type:'hidden',
            value:"lead"
        },
        // {
        //     label:"id",
        //     name:"id",
        //     type:'hidden',
        //     value:""
        // },
        {
          label:"status",
          name: "status",
          type: 'hidden',
          value: 1
      }
      ]
  };

   }


   scroll() {
    

    document.querySelector('.s-formsection').scrollIntoView({ behavior: 'smooth', });

  }


  ngOnInit() {
     if(this.ActivatedRoute.snapshot.params._id != null && typeof(this.ActivatedRoute.snapshot.params._id) != "undefined"){
     setTimeout(() => {
    //      console.log(this.shareUser)
    //      console.log(this.shareUser.type)
  
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
    //      //mentor
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
  
    }, 3000)
    }

  }

}
