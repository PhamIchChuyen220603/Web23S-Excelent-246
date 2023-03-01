import { Component } from '@angular/core';
import { AuthService } from '../../../app/service/auth.service'

@Component({
  selector: 'app-navbar-one',
  templateUrl: './navbar-one.component.html',
  styleUrls: ['./navbar-one.component.scss']
})
export class NavbarOneComponent {
  constructor(public authService: AuthService) {
  }
  public login() {
    try {
      this.authService.loginGG();
      console.log('login success!');
    } catch (err) {
      alert('login fail!');
    }
  }
  ngOnInit() { }
}
