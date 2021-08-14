import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { ConnectionService } from 'ng-connection-service';
import { environment } from 'src/environments/environment';
import { UserService } from './cores/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        fadeInOnEnterAnimation({duration:250}),
        fadeOutOnLeaveAnimation({duration:250})
    ]
})
export class AppComponent {

    isConnected = true;
    title = 'remote-saklar';

    constructor(
        public data: UserService,
        private swUpdate: SwUpdate,
        private _snackBar: MatSnackBar,
        private connectionService: ConnectionService,
    ) {
        this.swUpdate.available.subscribe(event => {
            const snack = this._snackBar.open("Versi terbaru telah tersedia", "Update");
            snack.onAction().subscribe(() => {
                window.location.reload();
            })
        });
        this.connectionService.monitor().subscribe(isConnected => {
            this.isConnected = isConnected;

            if (this.isConnected) {
                console.log(this.isConnected)
            } else {
                this._snackBar.open('Koneksi internet terganggu', '', {
                    duration: 3000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            }

        })
        console.log(environment.versiApp);
    }
}
