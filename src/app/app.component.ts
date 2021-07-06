import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './cores/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'remote-saklar';

    constructor(
        public data: UserService
    ) {
        this.data.getProfile();
        console.log(environment.versiApp);
    }
}
