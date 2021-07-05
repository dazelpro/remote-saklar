import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

    dataUserAuth;
    dataUsrLcl: any = {};
    link: string;
    loading = false;

    user: SocialUser;
    loggedIn: boolean;

    constructor(
        private router: Router,
        private zone: NgZone,
        private authService: SocialAuthService,
    ) { }

    ngOnInit(): void {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.dataUserAuth = {
                userID: user['id'],
                userEmail: user['email'],
                userName: user['firstName'],
                userLastName: user['lastName'],
                userPhotoUrl: user['photoUrl'],
                userAuthToken: user['authToken']
            };
            this.dataUsrLcl.usr = {
                id: user['id'],
                email: user['email'],
                name: user['firstName'],
                lastName: user['lastName'],
                img: user['photoUrl'],
            };
            this.login();
        });
    }
    
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    async login() {
        this.loading = true;
        localStorage.setItem('token', 'asdasdsad');
        localStorage.setItem('auth', JSON.stringify(this.dataUsrLcl));
        this.zone.run(() => {
            this.router.navigate(['/dashboard']);
        });
    }

}
