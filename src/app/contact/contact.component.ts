import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MetaService } from '@ngx-meta/core';
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


  constructor(public _apiService: ApiService, public ActivatedRoute: ActivatedRoute,public meta:MetaService) {


    this.meta.setTitle(' DNA Of Success - Contact Us');

    this.meta.setTag('og:description', 'Description: Get in touch with our support team at the DNA Master Course and we will be happy to answer any questions for you. Learn about our mentorship programs, personal development programs and much more .');
    this.meta.setTag('twitter:description', 'Description: Get in touch with our support team at the DNA Master Course and we will be happy to answer any questions for you. Learn about our mentorship programs, personal development programs and much more.');

    this.meta.setTag('og:keyword', 'Contact DNA Of Success, DNA Of Success Contact, Contact DNA Master Course, DNA Master Course Contact');
    this.meta.setTag('twitter:keyword', 'Contact DNA Of Success, DNA Of Success Contact, Contact DNA Master Course, DNA Master Course Contact');

    this.meta.setTag('og:title', 'DNA Of Success - Blogs');
    this.meta.setTag('twitter:title', 'DNA Of Success - Blogs');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://dna.influxiq.com/');
    this.meta.setTag('og:image', '../../assets/images/default_image.jpg');

    this._apiService.getclientip().subscribe((res: any) => {
      // console.log(res);
        this.ip=res.ip;
        console.log(this.ip)

        
        this.formdata = {
          successmessage: "Added Successfully !!",
          redirectpath: "",
          submittext:"Submit",
          // canceltext:"Cancel Now",
          //resettext:"Reset This",
          submitactive:true, //optional, default true
          apiUrl: this._apiService.api_url,
          endpoint: 'api/contactus',  //change endpoint
          jwttoken: this._apiService.jwtToken,
      
          fields: [
            {
              heading: "Name",
              label: " ",
              name: "name",
              value: '',
              type: "text",
              validations: [
                { rule: 'required', message: 'Name field is required' },
                { rule: 'maxLength', value: 10 },
                { rule: 'minLength', value: 2 }
              ],
      
            },
      
            {
              heading: "Email",
              label: "",
              name: "email",
              type: 'email',
              //hint: "abc@gmail.com",
              validations: [
                { rule: 'required', message: "Email field is required" },
                { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }]
            },
            {
              heading: "Phone",
              label: "",
              name: "phone",
              type: 'text',
              hint: '',
              validations: [
                { rule: 'required', message: "Phone field is required" }
      
              ]
            },
            {
              heading: "Message",
              label: "",
              name: "message",
              value: '',
              type: "textarea",
              validations: [
                { rule: 'required' , message: 'Message field is required'},
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
      
     })

  }



  ngOnInit() {


  }

}
