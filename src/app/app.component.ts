import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { environment } from 'src/environments/environment';
import { UserService } from './cores/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        fadeInOnEnterAnimation(),
        fadeOutOnLeaveAnimation()
    ]
})
export class AppComponent {

    title = 'remote-saklar';

    constructor(
        public data: UserService,
        private swUpdate: SwUpdate,
        private _snackBar: MatSnackBar
    ) {
        this.swUpdate.available.subscribe(event => {
            const snack = this._snackBar.open("Versi terbaru telah tersedia", "Update");
            snack.onAction().subscribe(() => {
                window.location.reload();
            })
        });
        console.log(environment.versiApp);
    }
}
