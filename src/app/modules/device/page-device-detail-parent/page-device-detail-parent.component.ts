import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';
import { DialogRenameDeviceComponent } from './dialog-rename-device/dialog-rename-device.component';

@Component({
    selector: 'app-page-device-detail-parent',
    templateUrl: './page-device-detail-parent.component.html',
    styleUrls: ['./page-device-detail-parent.component.css']
})
export class PageDeviceDetailParentComponent implements OnInit {

    idDevice;
    titlePage;
    dataDevice;
    mySwitch: Object;
    
    constructor(
        private rest: ApiService,
        private activatedRoute: ActivatedRoute,
        private _location: Location,
        public dataUser: UserService,
        private _snackBar: MatSnackBar,
        private router: Router,
        public dialog: MatDialog,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.idDevice = activatedRoute.snapshot.url[0]["path"];
        }
        dataUser.getProfile();
        dataUser.loadingTrigger(true);
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
                    this.dataUser.loadingTrigger(false);
                    this.titlePage = data['device'][0]['device_name'];
                    this.dataDevice = data['device'][0];
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

    openDialogRenameDevice() {
        const dialogRef = this.dialog.open(DialogRenameDeviceComponent, {
            width: '450px',
            height: 'auto',
            data: this.dataDevice
        });
        dialogRef.afterClosed().subscribe(arr => {
            if(arr) {
                if (arr.success) {
                    this.dataUser.loadingTrigger(true);
                    this.ngOnInit();
                }
            }
        });
    }

    checkboxAction(arr,items) {
        let status = arr.currentTarget.checked;
        if (status == true) {
            // console.log('Hidupkan!');
            this.rest.onDevice(items);
        } else {
            // console.log('Matikan!');
            this.rest.offDevice(items);
        }
    }

    detail(arr) {
        let deviceSN = this.idDevice.toLowerCase();
        let switchKey = arr.key.toLowerCase();
        this.router.navigateByUrl(`/device/${deviceSN}/${switchKey}`);
    }

    back() {
        this._location.back();
    }

}
