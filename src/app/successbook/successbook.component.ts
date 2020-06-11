import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-successbook',
  templateUrl: './successbook.component.html',
  styleUrls: ['./successbook.component.css']
})
export class SuccessbookComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  goToHome(){} 


  scroll() {
    

    document.querySelector('.top_body_right').scrollIntoView({ behavior: 'smooth', });

  }

  // terms and condition modal
  termsModal(){
    // window.scrollTo(0, 0);
 

    const dialogRef = this.dialog.open(TermsandConditionSB, { 
      
     // width: '250px',
     panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  privacyModal(){
    // window.scrollTo(0, 0);
    
    const dialogRef = this.dialog.open(PrivacyPolicySB, {
      // width: '250px',
      panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  AddONModal(){
    // window.scrollTo(0, 0);
    
    const dialogRef = this.dialog.open(AddON, {
      // width: '250px',
      panelClass: ['AddONWrapper'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}
 


@Component({
  selector: 'terms-dialog',
  templateUrl: 'terms&condition.html',
})
export class TermsandConditionSB {

  constructor(
    public dialogRef: MatDialogRef<TermsandConditionSB>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'privacy-dialog',
  templateUrl: 'privacy&policy.html',
})
export class PrivacyPolicySB {

  constructor(
    public dialogRef: MatDialogRef<PrivacyPolicySB>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: ' AddON-dialog',
  templateUrl: 'Add-On.html',
})
export class  AddON {

  constructor(
    public dialogRef: MatDialogRef<AddON>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}