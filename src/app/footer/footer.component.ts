import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {window.scrollTo(500, 0); }

  ngOnInit() {
  }

   // terms and condition modal
   termsModal(){
    window.scrollTo(0, 0);
 

    const dialogRef = this.dialog.open(TermsandCondition, { 
      
     // width: '250px',
     panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  privacyModal(){
    window.scrollTo(0, 0);
    
    const dialogRef = this.dialog.open(PrivacyPolicy, {
      // width: '250px',
      panelClass: ['footermodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}


/**terms and condition */
@Component({
  selector: 'terms-dialog',
  templateUrl: 'terms&condition.html',
})
export class TermsandCondition {

  constructor(
    public dialogRef: MatDialogRef<TermsandCondition>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'privacy-dialog',
  templateUrl: 'privacy&policy.html',
})
export class PrivacyPolicy {

  constructor(
    public dialogRef: MatDialogRef<PrivacyPolicy>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}