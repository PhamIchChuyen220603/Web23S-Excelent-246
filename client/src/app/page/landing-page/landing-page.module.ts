import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
<<<<<<< HEAD
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NavbarLandingPageComponent } from './components/navbar-landing-page/navbar-landing-page.component';
=======
import { SharedModule } from 'src/app/shared/shared.module';
>>>>>>> 9613062335065d0567888f55d68f2681caeeb86e
@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarLandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule

  ]
})
export class LandingPageModule { }
