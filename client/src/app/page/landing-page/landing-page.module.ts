import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';


import { SharedModule } from '../../shared/shared.module';
import { NavbarLandingPageComponent } from './components/navbar-landing-page/navbar-landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarLandingPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule

  ]
})
export class LandingPageModule { }
