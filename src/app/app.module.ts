import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { TestresolveService } from './testresolve.service';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { DemoMaterialModule } from './material-module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent,TermsandCondition, PrivacyPolicy } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewthewholestoryComponent } from './newthewholestory/newthewholestory.component';
import { NewmentorComponent } from './newmentor/newmentor.component';
import { NewaboutbetoComponent } from './newaboutbeto/newaboutbeto.component';
import { NewsuccessgeneticsComponent } from './newsuccessgenetics/newsuccessgenetics.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AffiliatesignupComponent } from './affiliatesignup/affiliatesignup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { FacebookModule, FacebookService } from 'ngx-facebook';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ListingModule} from 'listing-angular7';
// import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
// import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function metaFactory(): MetaLoader {
//   return new MetaStaticLoader({
//     pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
//     pageTitleSeparator: ' - ',
//     applicationName: '',
//     defaults: {
//       title: '',
//       description: '',
//       'og:image': '',
//       'og:type': 'website',
//       'og:locale': 'en_US',
//       'og:locale:alternate': 'en_US,nl_NL,tr_TR'
//     }
//   });
// }
// export function translateLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NewthewholestoryComponent,
    NewmentorComponent,
    TermsandCondition,
    PrivacyPolicy,
    NewaboutbetoComponent,
    NewsuccessgeneticsComponent,
    AboutComponent,
    BlogComponent,
    BlogdetailComponent,
    AffiliatesignupComponent,
    LoginComponent,
    ProductComponent,
    ContactComponent,
    MentorsignupComponent,
    LandingpageComponent,
  ],
  imports: [
    ListingModule,
    DemoMaterialModule,
    FacebookModule.forRoot(),
    BrowserAnimationsModule,
  
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule,
    // TranslateModule.forRoot(
    //   {
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: translateLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }
    // ),
    
    // MetaModule.forRoot(
    //   {
    //   // provide: MetaLoader,
    //   // useFactory: (metaFactory),
    //   // deps: [TranslateService]
    // }
    // ),
  
  ],
  providers: [
    CookieService,TestresolveService,ApiService,FacebookService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [TermsandCondition, PrivacyPolicy],
  // exports: [TranslateModule],
})
export class AppModule {
  constructor(public http: HttpClient, public router: Router) {
  //  this.router.navigateByUrl('/')
  }

}
