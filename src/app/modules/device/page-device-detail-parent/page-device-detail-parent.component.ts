import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/cores/api.service';

@Component({
    selector: 'app-page-device-detail-parent',
    templateUrl: './page-device-detail-parent.component.html',
    styleUrls: ['./page-device-detail-parent.component.css']
})
export class PageDeviceDetailParentComponent implements OnInit {

    id;
    titlePage;
    
    constructor(
        private rest: ApiService,
        private activatedRoute: ActivatedRoute,
        private _location: Location,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.id = activatedRoute.snapshot.url[0]["path"];
        }
    }

    async ngOnInit() {
        this.id = this.id.toUpperCase()
        try {
            await this.rest.getDeviceById(this.id).subscribe(async (data) => {
                console.log(data);
            }, (err) => {
                console.log(err);
                // this.loading = false;
                // this._snackBar.open('Server sedang sibuk', '', {
                //     duration: 1000,
                //     panelClass: ['mat-snackbar', 'mat-primary']
                // });
            });
        } catch (error) {
            console.log(error);
        }
    }

    back() {
        this._location.back();
    }

}
