import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NewthewholestoryComponent } from '../newthewholestory/newthewholestory.component';
import { NewmentorComponent } from '../newmentor/newmentor.component';
import { BlogComponent } from '../blog/blog.component';
import { TestresolveService } from '../testresolve.service';
import { AboutComponent } from '../about/about.component';
import { NewaboutbetoComponent } from '../newaboutbeto/newaboutbeto.component';
import { NewsuccessgeneticsComponent } from '../newsuccessgenetics/newsuccessgenetics.component';
import { LiveWebinarComponent } from '../live-webinar/live-webinar.component';
import { environment } from 'src/environments/environment';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';
import { MentorsignupComponent } from '../mentorsignup/mentorsignup.component';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { AffiliatesignupComponent } from '../affiliatesignup/affiliatesignup.component';
 import { TestimonialsComponent } from '../testimonials/testimonials.component';

import { AffiliatenewsignupComponent } from '../affiliatenewsignup/affiliatenewsignup.component';

//import { ContactComponent } from '../contact/contact.component';
 
const api_url = environment['api_url'];

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'thewholestory', component: NewthewholestoryComponent },

  // {path:'testimonials', component: TestimonialsComponent},

  { path: 'mentor', component: NewmentorComponent },
  {
    path: 'blog', component: BlogComponent, resolve: { blogData: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api1/getblogbydate' }
  },

  { path: 'blog/:_id', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aboutbeto', component: NewaboutbetoComponent },
  { path: 'successgenetics', component: NewsuccessgeneticsComponent },
  {path:'contact-us', component: ContactComponent},
  {
    path: 'live-webinar', component: LiveWebinarComponent,
    resolve: {
      shop: TestresolveService
    }, data: {
      requestcondition: {
        source: '', condition: {
        }
      },
      endpoint: 'api/getwebinarshop',
      api_url: api_url
    }
  },
  {
    path: 'live-webinar/:id', component: LiveWebinarComponent,
    resolve: {
      shop: TestresolveService
    }, data: {
      requestcondition: {
        source: '', condition: {
        }
      },
      endpoint: 'api/getwebinarshop',
      api_url: api_url
    }
  },

  {
    path: 'products', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },

  //banner image display route
  {
    path: 'products/:class/:_id', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getbannerdataforlandingpage' }
  },

  { path: 'products-list/:id', component: ProductComponent,
  resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
 },
  {
    path: 'products/:class', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },
  {
    path: 'products-buy/:buy', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },
  {
    path: 'products', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },

  { path: 'mentorsignup', component: MentorsignupComponent },
  {
    path: 'mentorsignup/:_id', component: MentorsignupComponent,
    resolve: { Data: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getuserdatabyid' }
  },

  { path: 'landingpage', component: LandingpageComponent },
  {
    path: 'landingpage/:_id', component: LandingpageComponent,
    resolve: { Data: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getuserdatabyid' }
  },
  { path: 'affiliatesignup', component: AffiliatesignupComponent },
  {
    path: 'affiliatesignup/:_id', component: AffiliatesignupComponent,
    resolve: { Data: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getuserdatabyid' }
  },
  {path:'affiliatenewsignup', component: AffiliatenewsignupComponent}, 




  // {path:'contact', component: ContactComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
