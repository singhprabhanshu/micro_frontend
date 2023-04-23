import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import {APP_BASE_HREF} from '@angular/common';
// import { AboutComponent } from './modules/components/about/about.component';
// import { AboutModule } from './modules/componentModule/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
