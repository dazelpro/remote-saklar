import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-page-device-detail-child',
    templateUrl: './page-device-detail-child.component.html',
    styleUrls: ['./page-device-detail-child.component.css']
})
export class PageDeviceDetailChildComponent implements OnInit {

    loading;
    
    constructor(
        private _location: Location,
    ) { }

    ngOnInit(): void {
    }

    back() {
        this._location.back();
    }

}
