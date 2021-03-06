import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NewthewholestoryComponent } from '../newthewholestory/newthewholestory.component';
import { FooterComponent } from '../footer/footer.component';
// import { HeaderComponent,  } from '../header/header.component';
import { DemoMaterialModule } from '../material-module';
import { TemplateModule } from '../templatemodule';
import { NewmentorComponent } from '../newmentor/newmentor.component';
import { BlogComponent } from '../blog/blog.component';
import { AboutComponent } from '../about/about.component';
import { NewaboutbetoComponent } from '../newaboutbeto/newaboutbeto.component';
import { NewsuccessgeneticsComponent } from '../newsuccessgenetics/newsuccessgenetics.component';
import { LiveWebinarComponent } from '../live-webinar/live-webinar.component';
import { ProductComponent,CommingSoon2} from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { MentorsignupComponent, formModal } from '../mentorsignup/mentorsignup.component';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { AffiliatesignupComponent } from '../affiliatesignup/affiliatesignup.component';
import { AffiliatenewsignupComponent } from '../affiliatenewsignup/affiliatenewsignup.component';

// import { ContactComponent } from '../contact/contact.component';
// import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    // HeaderComponent,
    NewthewholestoryComponent,
    NewmentorComponent,
    BlogComponent,
    AboutComponent,
    NewaboutbetoComponent,
    NewsuccessgeneticsComponent,
    LiveWebinarComponent,
    ProductComponent,
    CommingSoon2,
    ContactComponent,
    MentorsignupComponent,
    formModal,
    LandingpageComponent,
    AffiliatesignupComponent,
    AffiliatenewsignupComponent
    // ContactComponent,
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
  ],
  entryComponents: [formModal,CommingSoon2],

})
export class PagesModule { }
