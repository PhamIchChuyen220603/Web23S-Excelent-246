import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component import
import { NavbarOneComponent } from '../components/navbar-one/navbar-one.component'
import { LoadingComponent } from '../components/loading/loading.component'
import { WarningComponent } from '../components/warning/warning.component'
import { SuccessComponent } from '../components/success/success.component'
import { ErrorComponent } from '../components/error/error.component'
@NgModule({
  declarations: [NavbarOneComponent, LoadingComponent, WarningComponent, SuccessComponent, ErrorComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarOneComponent,
    LoadingComponent,
    WarningComponent,
    SuccessComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
