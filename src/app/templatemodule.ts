import { NgModule } from '@angular/core';
// import {A11yModule} from '@angular/cdk/a11y';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingModule } from 'listing-angular7';
//import { ListingModule } from 'listing-angular7';
//import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,//custom ng module created
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListingModule,
   // ListingModule,
  //ReactiveFormsModule,(app component bootstrap}
  // FormsModule,
  ],
  exports: [
    // A11yModule,
    FooterComponent,
    HeaderComponent,
    ListingModule



  ]
})
export class TemplateModule { }


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */