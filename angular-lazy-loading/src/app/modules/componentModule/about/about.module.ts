import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from '../../components/about/about.component';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ],
  providers: [
  ],
})
export class AboutModule { }
