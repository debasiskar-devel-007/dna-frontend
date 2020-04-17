import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewthewholestoryComponent } from './newthewholestory/newthewholestory.component';
import { NewmentorComponent } from './newmentor/newmentor.component';

const routes: Routes = [
  {path:'', component: HomeComponent}, 
  {path:'home', component: HomeComponent}, 
  {path:'newthewholestory', component: NewthewholestoryComponent}, 
  {path:'newmentor', component: NewmentorComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
