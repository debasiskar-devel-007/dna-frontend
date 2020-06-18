import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { NewthewholestoryComponent } from './newthewholestory/newthewholestory.component';
// import { NewmentorComponent } from './newmentor/newmentor.component';
import { NewaboutbetoComponent } from './newaboutbeto/newaboutbeto.component';
//import { NewsuccessgeneticsComponent } from './newsuccessgenetics/newsuccessgenetics.component';
//import { AboutComponent } from './about/about.component';
// import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AffiliatesignupComponent } from './affiliatesignup/affiliatesignup.component';
import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';
//import { ContactComponent } from './contact/contact.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { TestresolveService } from './testresolve.service';
import { environment } from '../environments/environment';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenteelandingpageComponent } from './menteelandingpage/menteelandingpage.component';
import { SuccessComponent } from './success/success.component';
//import { LiveWebinarComponent } from './live-webinar/live-webinar.component';
import { SuccessbookComponent } from './successbook/successbook.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
//import { ContactComponent } from './contact/contact.component';
// const api_url1 =  environment["api_url1"];
const api_url = environment['api_url'];


const routes: Routes = [

  {path:'home', component: HomeComponent}, 
  {path:'', component: HomeComponent}, 
  {path:'ordersuccess', component: OrdersuccessComponent},
  {path:'ordersuccess/:_id', component: OrdersuccessComponent,resolve: {successData: TestresolveService},
  data: {requestcondition: {source: '', condition: {'_id': '_id'}}, endpoint: 'api/ordersuccessresolve', api_url: api_url}}, 

  {path:'successbook', component: SuccessbookComponent},

//   {path:'live-webinar', component: LiveWebinarComponent, 
//   resolve: {
//     shop: TestresolveService
//   },data: {requestcondition: {source: '',condition: {
//       }
//     },
//     endpoint: 'api/getwebinarshop',
//     api_url: api_url
//   }
// }, 
// {path:'live-webinar/:id', component: LiveWebinarComponent, 
// resolve: {
//   shop: TestresolveService
// },data: {requestcondition: {source: '',condition: {
//     }
//   },
//   endpoint: 'api/getwebinarshop',
//   api_url: api_url
// }
// },

  // {path:'thewholestory', component: NewthewholestoryComponent}, 

  // {path:'mentor', component: NewmentorComponent}, 


 // {path:'aboutbeto', component: NewaboutbetoComponent}, 
// { path: 'aboutbeto', component: NewaboutbetoComponent },


  // { path: 'successgenetics', component: NewsuccessgeneticsComponent },


 // {path:'about', component: AboutComponent}, 

  // { path: 'about', component: AboutComponent },


  // // {path:'blog', component: BlogComponent,resolve: { blogData: TestresolveService },
  // // data: { requestcondition: { source: '', condition: {} }, endpoint: 'api1/getblogbydate'}}, 

  // {path:'blog/:_id', component: BlogComponent},

  {
    path: 'blog-details/:blogtitle/:_id', component: BlogdetailComponent, resolve: { blogData: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getblogdatabyid' }
  },

  { path: 'affiliatesignup', component: AffiliatesignupComponent },
  {
    path: 'affiliatesignup/:_id', component: AffiliatesignupComponent,
    resolve: { Data: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api1/getuserdatabyid' }
  },

  { path: 'login', component: LoginComponent },

  // {
  //   path: 'products', component: ProductComponent,
  //   resolve: { packagedata: TestresolveService },
  //   data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  // },

  // //banner image display route
  // {
  //   path: 'landingpage/:class/:_id', component: ProductComponent,
  //   resolve: { packagedata: TestresolveService },
  //   data: { requestcondition: { source: '', condition: {"_id":"_id"} }, endpoint: 'api1/getbannerdataforlandingpage' }
  // },

  // { path: 'products-list/:id', component: ProductComponent },
  // {
  //   path: 'products/:class', component: ProductComponent,
  //   resolve: { packagedata: TestresolveService },
  //   data: { requestcondition: { source: '', condition: {} }, endpoint: 'api/getfrontendpackage' }
  // },

  //{path:'contact-us', component: ContactComponent}, 

 //{ path: 'contact', component: ContactComponent },


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


  { path: 'menteelandingpage', component: MenteelandingpageComponent },
  { path: 'success', component: SuccessComponent },
  {
    path: 'success/:_id', component: SuccessComponent, resolve: { successData: TestresolveService },
    data: { requestcondition: { source: '', condition: { "_id": "_id" } }, endpoint: 'api/ordersuccessresolve' }
  },


  {
    path: 'cart', component: CartComponent,
  },
  {
    path: 'cart/:_id', component: CartComponent,
    resolve: { cart: TestresolveService },
    data: {
      requestcondition: { source: '', condition: { _id: '_id' } },
      endpoint: 'api/getcartdetails',
      api_url: api_url
    }
  },
  {
    path: 'checkout', component: CheckoutComponent,

  },
  {
    path: 'checkout/:_id', component: CheckoutComponent,
    resolve: { checkout: TestresolveService },
    data: {
      requestcondition: { source: '', condition: { _id: '_id' } },
      endpoint: 'api/getcartdetailsfrontend',
      api_url: api_url
    }
  },

  // {path: '', redirectTo: 'home', pathMatch: 'full'},

  

  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {path: '**', component: HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
