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

const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path:'home', component: HomeComponent}, 
  {path:'thewholestory', component: NewthewholestoryComponent}, 
  {path:'mentor', component: NewmentorComponent}, 
  {path:'aboutbeto', component: NewaboutbetoComponent}, 
  {path:'successgenetics', component: NewsuccessgeneticsComponent}, 
  {path:'about', component: AboutComponent}, 
  {path:'blog', component: BlogComponent}, 
  {path:'blogdetail', component: BlogdetailComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
