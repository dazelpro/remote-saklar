import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-bottom-nav-bar',
    templateUrl: './bottom-nav-bar.component.html',
    styleUrls: ['./bottom-nav-bar.component.css']
})
export class BottomNavBarComponent implements OnInit {

    isUrl;
    isPage;

    constructor(
        private router : Router,
    ) { }

    ngOnInit(): void {
        this.isUrl = this.router.url;
        if (this.isUrl.match(/dashboard.*/)) {
            this.isPage = 'Dashboard'
        } else if (this.isUrl.match(/device.*/)) {
            this.isPage = 'Device'
        } else if (this.isUrl.match(/profile.*/)) {
            this.isPage = 'Profile'
        }
    }

}
