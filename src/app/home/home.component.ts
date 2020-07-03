import { Component, OnInit,Inject } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ActivatedRoute ,Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public meta: MetaService,public router:Router,public dialog: MatDialog) { 
      // window.scrollTo(500, 0); 
  
    this.meta.setTitle('DNA Of Success - The DNA Master Course');

    this.meta.setTag('og:description', 'Jack Zufelt’s The DNA Of Success Master Course to help you identify and overcome barriers using the Success Attitude Formula to achieve success at the high levels you always desired.');
    this.meta.setTag('twitter:description', 'Jack Zufelt’s The DNA Of Success Master Course to help you identify and overcome barriers using the Success Attitude Formula to achieve success at the high levels you always desired.');

    this.meta.setTag('og:keyword', 'Personal Development Course, Success Attitude Formula, DNA of Success');
    this.meta.setTag('twitter:keyword', 'Personal Development Course, Success Attitude Formula, DNA of Success');

    this.meta.setTag('og:title', 'DNA Of Success - The DNA Master Course');
    this.meta.setTag('twitter:title', 'DNA Of Success - The DNA Master Course');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:url','https://dna.influxiq.com/');
      this.meta.setTag('og:image', '../../assets/images/default_image.jpg');
  }

  ngOnInit() {
  }
  learnproduct(value:any){
    this.openDialog()
    // console.log(value);
    // this.router.navigateByUrl('/pages/products/'+value)
  }
  learnproduct1(value){
    this.router.navigateByUrl('/pages/products-list/'+value)

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CommingSoon, {
      width: '250px',
      data: '',
      panelClass:'commingsoon'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'commingsoon.html',
})
export class CommingSoon {

  constructor(
    public dialogRef: MatDialogRef<CommingSoon>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}