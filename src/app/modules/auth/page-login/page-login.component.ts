import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
    styleUrls: ['./page-login.component.css'],
    animations: [
        fadeInOnEnterAnimation(),
        fadeOutOnLeaveAnimation()
    ]
})
export class PageLoginComponent implements OnInit {

    dataUserAuth;
    dataUsrLcl: any = {};
    loading = true;

    user: SocialUser;

    constructor(
        private rest: ApiService,
        private router: Router,
        private zone: NgZone,
        private authService: SocialAuthService,
        private _snackBar: MatSnackBar,
        public data: UserService
    ) { 
        setTimeout(()=>{
            this.data.loadingTrigger(false);
            this.loading = false;
        }, 1000);
    }

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
        this.data.loadingTrigger(true);
        this.loading = true;
        try {
            await this.rest.authUser(this.dataUserAuth).subscribe(async (data) => {
                if (data["success"]) {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('auth',JSON.stringify(this.dataUsrLcl));
                    this.zone.run(() => {
                        this.router.navigate(['/dashboard']);
                    });
                }
            },(err)=>{
                this.data.loadingTrigger(false);
                this.loading = false;
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

}
