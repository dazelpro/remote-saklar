import { Component } from '@angular/core';
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
        public data: UserService
    ) {
        console.log(environment.versiApp);
    }
}
