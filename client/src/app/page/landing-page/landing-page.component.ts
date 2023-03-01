import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public auth: AuthService) {
  }
}
