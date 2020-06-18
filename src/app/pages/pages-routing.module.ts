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

//import { environment } from '../environments/environment';
import { ProductComponent } from '../product/product.component';
//import { ContactComponent } from '../contact/contact.component';

const api_url = environment['api_url'];

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'thewholestory', component: NewthewholestoryComponent },
  { path: 'mentor', component: NewmentorComponent },
  {
    path: 'blog', component: BlogComponent, resolve: { blogData: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api1/getblogbydate' }
  },

  { path: 'blog/:_id', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aboutbeto', component: NewaboutbetoComponent },
  { path: 'successgenetics', component: NewsuccessgeneticsComponent },
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
    path: 'landingpage/:class/:_id', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getbannerdataforlandingpage' }
  },

  { path: 'products-list/:id', component: ProductComponent },
  {
    path: 'products/:class', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },
  {
    path: 'products', component: ProductComponent,
    resolve: { packagedata: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  },

  // {path:'contact', component: ContactComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
