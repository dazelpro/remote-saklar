import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/cores/user.service';
import { ApiService } from 'src/app/cores/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-page-device-detail-child',
    templateUrl: './page-device-detail-child.component.html',
    styleUrls: ['./page-device-detail-child.component.css']
})
export class PageDeviceDetailChildComponent implements OnInit {

    loading = true;
    idDevice;
    idDeviceDetail;
    name;
    req;
    res;
    
    constructor(
        private rest: ApiService,
        private _location: Location,
        private activatedRoute: ActivatedRoute,
        public dataUser: UserService,
        private _snackBar: MatSnackBar,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.idDevice = activatedRoute.snapshot.url[0]["path"];
            this.idDeviceDetail = activatedRoute.snapshot.url[1]["path"];
        }
        dataUser.getProfile();
    }

    ngOnInit(): void {
        this.getDeviceDetailByIdFB();
    }

    async getDeviceDetailByIdFB() {
        this.idDevice = this.idDevice.toUpperCase();
        this.idDeviceDetail = this.idDeviceDetail.toUpperCase();
        try {
            await this.rest.getDeviceDetailByIdFB(this.idDevice, this.idDeviceDetail).subscribe(async (data) => {
                this.name = data[0];
                this.req = data[1];
                this.res = data[2];
                this.loading = false;
                console.log(data)
            }, (err) => {
                console.log(err);
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    back() {
        this._location.back();
    }

}
