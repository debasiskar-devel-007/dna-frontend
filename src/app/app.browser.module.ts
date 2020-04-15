import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestresolveService } from './testresolve.service';
import { ApiService } from './api.service';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService,TestresolveService,ApiService],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
