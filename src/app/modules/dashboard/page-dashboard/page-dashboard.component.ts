import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/cores/user.service';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {

    constructor(
        public data: UserService
    ) {
    }

    ngOnInit(): void {
        setTimeout(()=>{
            this.data.loadingTrigger(false);
        }, 2000);
    }

    tes() {
        this.data.loadingTrigger(true)
    }

}
