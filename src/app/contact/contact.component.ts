import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { MetaService } from '@ngx-meta/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public ip:any;
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  temtdata: any = '';
  // formdata
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
 
  //public formdata: any;

  
  public formdata: any;

  


  constructor(public _apiService: ApiService, public ActivatedRoute: ActivatedRoute) {




    this._apiService.getclientip().subscribe((res: any) => {
      // console.log(res);
       this.ip=res.ip;
       console.log(this.ip)
     })

     this.formdata = {
      successmessage: "Added Successfully !!",
      redirectpath: "/contact",
      submittext:"Submit",
      // canceltext:"Cancel Now",
      // resettext:"reset This",
      submitactive:true, //optional, default true
      apiUrl: this._apiService.api_url,
      endpoint: '/api/contactus',  //change endpoint
      jwttoken: this._apiService.jwtToken,
  
      fields: [
        {
          heading: "",
          label: " Name",
          name: "name",
          value: '',
          type: "text",
          validations: [
            { rule: 'required' },
            { rule: 'maxLength', value: 10 },
            { rule: 'minLength', value: 2 }
          ],
  
        },
  
        {
          label: "Email",
          name: "email",
          type: 'email',
          hint: "abc@gmail.com",
          validations: [
            { rule: 'required', message: "Email field Needs to be required" },
            { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }]
        },
        {
          label: "Phone",
          name: "phone",
          type: 'number',
          hint: '',
          validations: [
            { rule: 'required' }
  
          ]
        },
        {
          heading: "",
          label: "Message",
          name: "message",
          value: '',
          type: "textarea",
          validations: [
            { rule: 'required' },
          ]
        },
        {
          label:"ip",
          name:"ip",
          type:'hidden',
          value:this.ip
      }
  
  
      ]
    };
  }



  ngOnInit() {
    

  }

}
