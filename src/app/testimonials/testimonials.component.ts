import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    // window.scrollTo(500, 0); 
  }

  ngOnInit() {
  }


  JoeGarciaModal(){
    
    
    const dialogRef = this.dialog.open(JoeGarciaDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  DorisWoodModal(){
    
    
    const dialogRef = this.dialog.open(DorisWoodDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  JasonMossModal(){
    
    
    const dialogRef = this.dialog.open(JasonMossDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  MaryLouModal(){
    
    
    const dialogRef = this.dialog.open(MaryLouDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  MikeDeLucaModal(){
    
    
    const dialogRef = this.dialog.open(MikeDeLucaDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  SteadwickModal(){
    
    
    const dialogRef = this.dialog.open(SteadwickDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  JohnSchopfModal(){
    
    
    const dialogRef = this.dialog.open(JohnSchopfDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  PennyLopezModal(){
    
    
    const dialogRef = this.dialog.open(PennyLopezDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  DeanMannheimerModal(){
    
    
    const dialogRef = this.dialog.open(DeanMannheimerDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  ChristinaWinseyModal(){
    
    
    const dialogRef = this.dialog.open(ChristinaWinseDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  SymeonRodgerModal(){
    
    
    const dialogRef = this.dialog.open(SymeonRodgerDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  JohnRockModal(){
    
    
    const dialogRef = this.dialog.open(JohnRockDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }


  KateBakerModal(){
    
    
    const dialogRef = this.dialog.open(KateBakerDetail, {
      // width: '250px',
      panelClass: ['testimonialsmodal'],
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

}



@Component({
  selector: 'JoeGarcia-dialog',
  templateUrl: 'JoeGarcia.html',
})
export class JoeGarciaDetail {

  constructor(
    public dialogRef: MatDialogRef<JoeGarciaDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'JasonMoss-dialog',
  templateUrl: 'JasonMoss.html',
})
export class JasonMossDetail {

  constructor(
    public dialogRef: MatDialogRef<JasonMossDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'DorisWood-dialog',
  templateUrl: 'DorisWood.html',
})
export class DorisWoodDetail {

  constructor(
    public dialogRef: MatDialogRef<DorisWoodDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'MaryLou-dialog',
  templateUrl: 'MaryLou.html',
})
export class MaryLouDetail {

  constructor(
    public dialogRef: MatDialogRef<MaryLouDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'MikeDeLuca-dialog',
  templateUrl: 'MikeDeLuca.html',
})
export class MikeDeLucaDetail {

  constructor(
    public dialogRef: MatDialogRef<MikeDeLucaDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'Steadwick-dialog',
  templateUrl: 'Steadwick.html',
})
export class SteadwickDetail {

  constructor(
    public dialogRef: MatDialogRef<SteadwickDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'JohnSchopf-dialog',
  templateUrl: 'JohnSchopf.html',
})
export class JohnSchopfDetail {

  constructor(
    public dialogRef: MatDialogRef<JohnSchopfDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




@Component({
  selector: 'PennyLopez-dialog',
  templateUrl: 'PennyLopez.html',
})
export class PennyLopezDetail {

  constructor(
    public dialogRef: MatDialogRef<PennyLopezDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'DeanMannheimer-dialog',
  templateUrl: 'DeanMannheimer.html',
})
export class DeanMannheimerDetail {

  constructor(
    public dialogRef: MatDialogRef<DeanMannheimerDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'ChristinaWinse-dialog',
  templateUrl: 'ChristinaWinse.html',
})
export class ChristinaWinseDetail {

  constructor(
    public dialogRef: MatDialogRef<ChristinaWinseDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




@Component({
  selector: 'SymeonRodger-dialog',
  templateUrl: 'SymeonRodger.html',
})
export class SymeonRodgerDetail {

  constructor(
    public dialogRef: MatDialogRef<SymeonRodgerDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



@Component({
  selector: 'JohnRock-dialog',
  templateUrl: 'JohnRock.html',
})
export class JohnRockDetail {

  constructor(
    public dialogRef: MatDialogRef<JohnRockDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'KateBaker-dialog',
  templateUrl: 'KateBaker.html',
})
export class KateBakerDetail {

  constructor(
    public dialogRef: MatDialogRef<KateBakerDetail>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    
    )  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}