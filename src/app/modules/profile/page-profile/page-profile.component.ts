import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

    urlImage;
    userName;
    userEmail;

    constructor(
        public dataUser : UserService,
        private rest: ApiService,
        private _snackBar: MatSnackBar,
        public data: UserService
    ) { 
        this.dataUser.getProfile()
    }

    ngOnInit(): void {
        this.getAccount();
    }

    async getAccount() {
        try {
            await this.rest.myAccount({ id : this.dataUser.id }).subscribe(async (data) => {
                if (data["success"]) {
                    this.data.loadingTrigger(false);
                    this.urlImage = data['user']['user_photo'];
                    this.userName = data['user']['user_name'] + ' ' + data['user']['user_last_name'];
                    this.userEmail = data['user']['user_email'];
                }
            },(err)=>{
                console.log(err);
                this.data.loadingTrigger(false);
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    logout() {
        localStorage.clear();
        window.location.reload();
    }

}
