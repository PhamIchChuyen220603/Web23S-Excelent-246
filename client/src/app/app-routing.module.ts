import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./page/landing-page/landing-page.module').then(m => m.LandingPageModule) },
{ path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./page/login-page/login-page.module').then(m => m.LoginPageModule) },
{ path: 'spreadsheet', loadChildren: () => import('./page/spreadsheet/spreadsheet.module').then(m => m.SpreadsheetModule) },
{ path: 'contact', loadChildren: () => import('./page/home/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
