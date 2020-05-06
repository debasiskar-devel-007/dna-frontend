import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { TestresolveService } from './testresolve.service';
import { environment } from '../environments/environment';
import { LandingpageComponent } from './landingpage/landingpage.component';
// const api_url1 =  environment["api_url1"];


const routes: Routes = [
  {path:'', component: HomeComponent}, 

  {path:'home', component: HomeComponent}, 

  {path:'thewholestory', component: NewthewholestoryComponent}, 

  {path:'mentor', component: NewmentorComponent}, 

  {path:'aboutbeto', component: NewaboutbetoComponent}, 

  {path:'successgenetics', component: NewsuccessgeneticsComponent}, 

  {path:'about', component: AboutComponent}, 

  {path:'blog', component: BlogComponent,resolve: { blogData: TestresolveService },
  data: { requestcondition: { source: '', condition: {} }, endpoint: 'api1/getblogdata'}}, 

  {path:'blog/:_id', component: BlogComponent},

  {path:'blog-details/:blogtitle/:_id', component: BlogdetailComponent,resolve: { blogData: TestresolveService },
  data: { requestcondition: { source: '', condition: {"_id":"_id"} }, endpoint: 'api1/getblogdata'}}, 

  {path:'affiliatesignup', component: AffiliatesignupComponent}, 

  {path:'login', component: LoginComponent}, 

  {path:'product', component: ProductComponent}, 

  {path:'contact', component: ContactComponent}, 

  {path:'mentorsignup', component: MentorsignupComponent}, 
  {path:'landingpage', component: LandingpageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
