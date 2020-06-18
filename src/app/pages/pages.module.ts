import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NewthewholestoryComponent } from '../newthewholestory/newthewholestory.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { DemoMaterialModule } from '../material-module';
import { TemplateModule } from '../templatemodule';
import { NewmentorComponent } from '../newmentor/newmentor.component';
import { BlogComponent } from '../blog/blog.component';
import { AboutComponent } from '../about/about.component';
import { NewaboutbetoComponent } from '../newaboutbeto/newaboutbeto.component';
import { NewsuccessgeneticsComponent } from '../newsuccessgenetics/newsuccessgenetics.component';
//import { ProductComponent } from '../product/product.component';
//import { ContactComponent } from '../contact/contact.component';
// import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    NewthewholestoryComponent,
    NewmentorComponent,
    BlogComponent,
    AboutComponent,
    NewaboutbetoComponent,
    NewsuccessgeneticsComponent,
   // ProductComponent
    //ContactComponent
    // FooterComponent,
    // HeaderComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DemoMaterialModule,
    TemplateModule,
    // RouterModule
    // FooterComponent
  ]
})
export class PagesModule { }
