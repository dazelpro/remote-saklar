import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-device-detail-parent',
    templateUrl: './page-device-detail-parent.component.html',
    styleUrls: ['./page-device-detail-parent.component.css']
})
export class PageDeviceDetailParentComponent implements OnInit {

    id
    
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.id = activatedRoute.snapshot.url[0]["path"];
        }
    }

    ngOnInit(): void {
        console.log(this.id)
    }

}
