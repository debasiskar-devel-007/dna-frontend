import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MetaService } from '@ngx-meta/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-completedsuccess',
  templateUrl: './completedsuccess.component.html',
  styleUrls: ['./completedsuccess.component.css']
})
export class CompletedsuccessComponent implements OnInit {
  public OrderData:any={};
  public value: any = null;
  public dat: any = [];
  constructor(public _apiService: ApiService,
    public ActivatedRoute: ActivatedRoute,
    private meta: MetaService, public router: Router, public cookieService: CookieService,public _snackBar: MatSnackBar,public apiService: ApiService) { }

  ngOnInit() {

    if (this.cookieService.get('data') != null) {
    this.OrderData=JSON.parse(this.cookieService.get('data'));
    console.log(this.OrderData,'OrderData')
    }
  }

  continue() {
    console.log(this.value);
    if (this.value != null) {
      this.OrderData.productDetails.usertype = this.value
    }else{
      this._snackBar.open('Please Select an Option to Continue', '', {
        duration: 2000,
      });
      return;
    }

    // console.log('value',this.value);
    //console.log('dat',this.dat)
    let cartdata: any = {
      "data": this.OrderData
    }
  // console.warn(cartdata);
 
    this.apiService.customRequest1(cartdata, 'api/order', environment['api_url']).subscribe((res: any) => {
      console.warn(res);
      if (res.status == 'success') {
        this.router.navigateByUrl('success/' + res.message._id);
      }
       if(res.status=='error'){
        this._snackBar.open(res.errormessage, '', {
          duration: 2000,
        });
      }

    });
    //  this.dialogRef.close();
  }

}
