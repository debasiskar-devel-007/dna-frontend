import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
public AllData:any =[];
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute,public apiService:ApiService,public router:Router) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((res:any) => {
      //console.log(res.successData);
      this.AllData=res.successData;
      console.warn(this.AllData);
     })
  }

}
