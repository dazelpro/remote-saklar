import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token') && localStorage.getItem('auth')) {
            return state.url.startsWith('/')
                ? true
                : (this.router.navigate(['/login']), false);

        } else {
            return state.url.startsWith('/')
                ? (this.router.navigate(['/login']), false)
                : true;
        }
    }
}
