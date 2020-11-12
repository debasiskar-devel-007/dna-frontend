import { Component, OnInit,Inject } from '@angular/core';
import {Router}from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public router:Router) { 
    // window.scrollTo(500, 0);
   }
  
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl('/home')
  }
  comming(){
    console.log('comming');
    this.openDialog();
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(CommingSoon3, {
      // width: '250px',
      data: '',
      panelClass:'commingsoon'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'overview-example-dialog',
  templateUrl: '../home/commingsoon.html',
})
export class CommingSoon3 {

  constructor(
    public dialogRef: MatDialogRef<CommingSoon3>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}