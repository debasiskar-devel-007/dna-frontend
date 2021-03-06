import { Component, OnInit } from '@angular/core';
// import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-affiliatesignup',
  templateUrl: './affiliatesignup.component.html',
  styleUrls: ['./affiliatesignup.component.css']
})
export class AffiliatesignupComponent implements OnInit {
  public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata: any = '';
  // formdata
  formfieldrefresh: boolean = true;
  updatetable: boolean = true;
  formfieldrefreshdata: any = null;
  public formdata: any;
  public parentid: any = '';
  public statesjson: any = [];
  public shareUser: any = [];

  constructor(
    public CookieService: CookieService,
    public _apiService: ApiService,
    public ActivatedRoute: ActivatedRoute,
    private meta: MetaService
  ) {
    this.meta.setTitle('DNA Of Success - Affiliates');

    this.meta.setTag('og:description', "Become an affiliate TODAY, and make a lot of money with Jack's world-famous, “DNA of Success” that has been taught to people in over 50 countries. The program has already paid out over $900,000 in affiliate commissions, and now YOU can also make $$$ with Jack's proven system!");

    this.meta.setTag('twitter:description', "Become an affiliate TODAY, and make a lot of money with Jack's world-famous, “DNA of Success” that has been taught to people in over 50 countries. The program has already paid out over $900,000 in affiliate commissions, and now YOU can also make $$$ with Jack's proven system!");

    this.meta.setTag('og:keyword', 'DNA Master Course Affiliates Login, Affiliates Login DNA Master Course, DNA Of Success Affiliates');
    this.meta.setTag('twitter:keyword', 'DNA Master Course Affiliates Login, Affiliates Login DNA Master Course, DNA Of Success Affiliates');

    this.meta.setTag('og:title', 'DNA Of Success - Affiliates');
    this.meta.setTag('twitter:title', 'DNA Of Success - Affiliates');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url', 'https://dna.influxiq.com/affiliatesignup');
    this.meta.setTag('og:image', 'https://dna.influxiq.com/assets/images/default_image.jpg');
    this._apiService.getState().subscribe((response: any) => {
      for (let i in response) {
        this.statesjson.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
          //{ 'val': response[i].name, 'name': response[i].name }
        );
      }
    })
    if (this.ActivatedRoute.snapshot.params._id != null && typeof (ActivatedRoute.snapshot.params._id) != "undefined") {
      this.CookieService.set('shareid', this.ActivatedRoute.snapshot.params._id);
      this.parentid = this.ActivatedRoute.snapshot.params._id;
      this.ActivatedRoute.data.subscribe((resolveData: any) => {
        this.shareUser = resolveData.Data.results.res[0]
        //console.log(this.shareUser,resolveData);
      });
    }


    let uid = this.CookieService.get('shareid');
    if (uid != null && uid != undefined && uid != '' && this.ActivatedRoute.snapshot.params.class == null) {
      let data: any = {
        "id": this.CookieService.get('shareid')
      }
      this._apiService.customRequest1(data, 'api1/usergetone', environment['api_url']).subscribe((res: any) => {
        // console.warn(res)
        this.shareUser = res.result[0];
      })
    }

    this.formdata = {
      successmessage: "Added Successfully !!",
      redirectpath: "",
      submittext: "Submit",
      submitactive: true, //optional, default true
      apiUrl: this._apiService.nodesslurl,
      endpoint: 'api1/addusers',
      jwttoken: this._apiService.jwtToken,
      fields: [
        {
          heading: "",
          label: "First Name",
          name: "firstname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Minimum of 2 Letters required" },
            // {rule:'maxLength',value:10},
            // {rule:'minLength',value: 2}
          ]
        },
        {
          heading: "",
          label: "Last Name",
          name: "lastname",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Minimum of 2 Letters required" },
            //{rule:'maxLength',value:10},
            //{rule:'minLength',value: 2}
          ]
        },
        {
          heading: "",
          label: "Email",
          name: "email",
          type: 'email',
          hint: "",
          validations: [
            { rule: 'required', message: "Enter Your Email" },
            { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }]
        },
        {
          heading: "",
          label: "Telephone",
          name: "phone",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Telephone Number" },
          ]
        },
        {
          heading: "",
          label: "Business Name",
          name: "company",
          value: '',
          type: "text",
          // validations:[
          //     {rule:'required'},
          //     {rule:'maxLength',value:10},
          //     {rule:'minLength',value: 2}
          //     ]
        },
        {
          heading: "",
          label: "Physical Address",
          name: "address",
          value: '',
          type: "text",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        
        {
          heading: "",
          label: "State",
          name: "state",
          val: this.statesjson,
          value: "",
          type: "select",
          validations: [
            { rule: 'required', message: "Enter Your State" },
          ]
        },
        {
          heading: "",
          label: "City",
          name: "city",
          value: '',
          type: "text",
          validations: [
            { rule: 'required', message: "Enter Your City" },
          ]
        },
        
        {
          heading: "",
          label: "Zip",
          name: "zip",
          value: '',
          type: "number",
          validations: [
            { rule: 'required', message: "Enter Your Pin Code" },
          ]
        },
        
        {
          heading: "",
          label: "Website Address",
          name: "website_url",
          value: '',
          type: "text",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        {
          heading: "",
          label: "About Me",
          name: "About Me",
          value: '',
          type: "textarea",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        {
          heading: "",
          label: "Notes",
          name: "notes",
          value: '',
          type: "textarea",
          // validations:[
          //     {rule:'required'},
          //     ]
        },
        {
          heading: "",
          label: "Password",
          name: "password",
          type: 'password',
          hint: "",
          validations: [
            { rule: 'required', message: "Password required" },
            { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
          ]
        }, {
          heading: "",
          label: "Confirm Password",
          name: "confirmpassword",
          type: 'password',
          hint: "",
          validations: [
            { rule: 'required', message: "Confirm Password required" },
            { rule: 'match', message: "Confirm Password field Needs to  match Password" },
            { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
          ]
        },
        {
          label: "type",
          name: "type",
          type: 'hidden',
          value: "affiliate"
        },
        {
          label: "status",
          name: "status",
          type: 'hidden',
          value: 1
        }
      ]
    };


  }

  ngOnInit() {
    if (this.ActivatedRoute.snapshot.params._id != null && typeof (this.ActivatedRoute.snapshot.params._id) != "undefined") {
      setTimeout(() => {
        console.log(this.shareUser)
        console.log(this.shareUser.type)

        if (this.shareUser.type == 'affiliate') {
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
        //mentor
        if (this.shareUser.type == 'mentor') {
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

      }, 3000);
    }
  }

  scrollWin(){ 
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  
  }


}
