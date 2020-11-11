import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestresolveService } from './testresolve.service';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { DemoMaterialModule } from './material-module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent,CommingSoon } from './home/home.component';
import { TermsandCondition, PrivacyPolicy, CommingSoon4  } from './footer/footer.component';
import { HeaderComponent ,CommingSoon3} from './header/header.component';
// import { NewthewholestoryComponent } from './newthewholestory/newthewholestory.component';
// import { NewmentorComponent } from './newmentor/newmentor.component';
//import { NewaboutbetoComponent } from './newaboutbeto/newaboutbeto.component';
//import { NewsuccessgeneticsComponent } from './newsuccessgenetics/newsuccessgenetics.component';
//import { AboutComponent } from './about/about.component';
// import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
//import { AffiliatesignupComponent } from './affiliatesignup/affiliatesignup.component';
import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
//import { MentorsignupComponent,formModal} from './mentorsignup/mentorsignup.component';
import { FacebookModule, FacebookService } from 'ngx-facebook';
//import { LandingpageComponent } from './landingpage/landingpage.component';
// import { ListingModule } from 'listing-angular7';
import { MenteelandingpageComponent } from './menteelandingpage/menteelandingpage.component';

import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { SuccessComponent } from './success/success.component';
//import { LiveWebinarComponent } from './live-webinar/live-webinar.component';
import { SuccessbookComponent, TermsandConditionSB, PrivacyPolicySB, AddON } from './successbook/successbook.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';

import { CartComponent, loginModal } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { TemplateModule } from './templatemodule';
import { MentordetailComponent, mentor_detail, gallery_modal } from './mentordetail/mentordetail.component';
import { CompletedsuccessComponent } from './completedsuccess/completedsuccess.component';
import { AboutbetoComponent } from './aboutbeto/aboutbeto.component';
import { TestimonialsComponent, JoeGarciaDetail, DorisWoodDetail, JasonMossDetail, MaryLouDetail, MikeDeLucaDetail, SteadwickDetail, JohnSchopfDetail, 
  PennyLopezDetail, DeanMannheimerDetail, ChristinaWinseDetail, SymeonRodgerDetail, JohnRockDetail, KateBakerDetail  } from './testimonials/testimonials.component';

//import { ContactComponent } from './contact/contact.component';


 

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '',
    defaults: {
      title: '',
      description: '',
      'og:image': '',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommingSoon,
    CommingSoon3,
    CommingSoon4,
    // FooterComponent,
    // TemplateModule,
    // HeaderComponent,
    // NewthewholestoryComponent,
    // NewmentorComponent,
    TermsandCondition,
    PrivacyPolicy,
    TermsandConditionSB,
    PrivacyPolicySB,
    // NewaboutbetoComponent,
    // NewsuccessgeneticsComponent,
    // AboutComponent,
    // BlogComponent, 
    BlogdetailComponent,
   // AffiliatesignupComponent,
    LoginComponent,
    // ProductComponent,
    //ContactComponent,
    // MentorsignupComponent,
    // formModal,
    //LandingpageComponent,
    MenteelandingpageComponent,
    SuccessComponent,
    MyLoaderComponent,
    //LiveWebinarComponent,
    SuccessbookComponent,
    AddON,
    OrdersuccessComponent,
    CartComponent,
    CheckoutComponent,
    loginModal,
    MentordetailComponent,
    mentor_detail,
    gallery_modal,
    CompletedsuccessComponent,
    AboutbetoComponent,
    TestimonialsComponent,
    JoeGarciaDetail,
    DorisWoodDetail,
    JasonMossDetail,
    MaryLouDetail,
    MikeDeLucaDetail,
    SteadwickDetail,
    JohnSchopfDetail,
    PennyLopezDetail,
    DeanMannheimerDetail,
    ChristinaWinseDetail,
    SymeonRodgerDetail,
    JohnRockDetail,
    KateBakerDetail,
    // AffiliatenewsignupComponent,
  
  ],
  imports: [
    // ListingModule,
    TemplateModule,
    DemoMaterialModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule,

    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgtUniversalModule,
    MetaModule.forRoot(
      {
        provide: MetaLoader,
        useFactory: (metaFactory),
      }
    ),
  ],
  providers: [
    CookieService, HttpClientModule, TestresolveService, ApiService, FacebookService, LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [CommingSoon3, CommingSoon4, CommingSoon,loginModal, TermsandCondition, PrivacyPolicy, TermsandConditionSB, PrivacyPolicySB, AddON, mentor_detail,gallery_modal, JoeGarciaDetail, DorisWoodDetail,
    JasonMossDetail, MaryLouDetail, MikeDeLucaDetail, SteadwickDetail, JohnSchopfDetail, PennyLopezDetail, DeanMannheimerDetail, ChristinaWinseDetail, SymeonRodgerDetail, JohnRockDetail, KateBakerDetail],
})
export class AppModule {

}
