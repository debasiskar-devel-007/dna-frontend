import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NewthewholestoryComponent } from '../newthewholestory/newthewholestory.component';
import { NewmentorComponent } from '../newmentor/newmentor.component';
import { BlogComponent } from '../blog/blog.component';
import { TestresolveService } from '../testresolve.service';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'thewholestory', component: NewthewholestoryComponent },
  { path: 'mentor', component: NewmentorComponent },
  {
    path: 'blog', component: BlogComponent, resolve: { blogData: TestresolveService },
    data: { requestcondition: { source: '', condition: {} }, endpoint: 'api1/getblogbydate' }
  },

  { path: 'blog/:_id', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
