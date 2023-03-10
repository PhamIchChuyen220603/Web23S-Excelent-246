import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (userInfo) => {
        if (userInfo) {
          this.authService.userInfo = userInfo;
          resolve(true);
        } else {
          this.authService.userInfo = null;
          window.alert('You need to login to access this page');
          resolve(false);
          this.router.navigate(['/login']);
        }
      });
    });
  }
}
