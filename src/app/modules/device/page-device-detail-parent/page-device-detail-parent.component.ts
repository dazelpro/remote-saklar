import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';

@Component({
    selector: 'app-page-device-detail-parent',
    templateUrl: './page-device-detail-parent.component.html',
    styleUrls: ['./page-device-detail-parent.component.css']
})
export class PageDeviceDetailParentComponent implements OnInit {

    idDevice;
    titlePage;
    mySwitch: Object;
    
    constructor(
        private rest: ApiService,
        private activatedRoute: ActivatedRoute,
        private _location: Location,
        public dataUser: UserService,
        private _snackBar: MatSnackBar,
        private router: Router,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.idDevice = activatedRoute.snapshot.url[0]["path"];
        }
        dataUser.getProfile();
    }

    async ngOnInit() {
        this.getDeviceById();
        this.getDeviceByIdFB();
    }

    async getDeviceById() {
        try {
            await this.rest.getDeviceById({user: this.dataUser.id, device: this.idDevice}).subscribe(async (data) => {
                if (!data['device'][0]) {
                    this.router.navigateByUrl('/device');
                    this._snackBar.open('Server sedang sibuk', '', {
                        duration: 1000,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                } else {
                    this.titlePage = data['device'][0]['device_name'];
                }
            }, (err) => {
                console.log('err');
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            });
        } catch (error) {
            console.log('error');
        }
    }

    async getDeviceByIdFB() {
        this.idDevice = this.idDevice.toUpperCase()
        try {
            await this.rest.getDeviceByIdFB(this.idDevice).subscribe(async (data) => {
                this.mySwitch = data;
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
