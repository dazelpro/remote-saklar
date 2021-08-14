import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';
import { environment } from 'src/environments/environment';
import { DialogConfirmLogoutComponent } from '../dialog-confirm-logout/dialog-confirm-logout.component';
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

    urlImage;
    userName;
    userEmail;
    v = environment.versiApp;

    constructor(
        public dataUser : UserService,
        private rest: ApiService,
        private _snackBar: MatSnackBar,
        public data: UserService,
        public dialog: MatDialog,
    ) { 
        dataUser.getProfile()
        data.loadingTrigger(true);
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
        const dialogRef = this.dialog.open(DialogConfirmLogoutComponent, {
            width: '450px',
            height: 'auto',
        });
        dialogRef.afterClosed().subscribe(arr => {
            if(arr) {
                localStorage.clear();
                window.location.reload();
            }
        });
    }

}
