import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/cores/user.service';
import { ApiService } from 'src/app/cores/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogRenameChildComponent } from './dialog-rename-child/dialog-rename-child.component';

@Component({
    selector: 'app-page-device-detail-child',
    templateUrl: './page-device-detail-child.component.html',
    styleUrls: ['./page-device-detail-child.component.css']
})
export class PageDeviceDetailChildComponent implements OnInit {

    dataChild;
    idDevice;
    idDeviceDetail;
    name;
    req;
    res;
    status;

    mySwitch;
    
    constructor(
        private rest: ApiService,
        private _location: Location,
        private activatedRoute: ActivatedRoute,
        public dataUser: UserService,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog,
    ) { 
        if (activatedRoute.snapshot.url[0]){
            this.idDevice = activatedRoute.snapshot.url[0]["path"];
            this.idDeviceDetail = activatedRoute.snapshot.url[1]["path"];
        }
        dataUser.getProfile();
        dataUser.loadingTrigger(true);
    }

    ngOnInit(): void {
        this.getDeviceDetailByIdFB();
    }

    async getDeviceDetailByIdFB() {
        this.idDevice = this.idDevice.toUpperCase()
        this.idDeviceDetail = this.idDeviceDetail.toUpperCase()
        try {
            await this.rest.getDeviceByIdFB(this.idDevice).subscribe(async (data) => {
                this.mySwitch = data.filter( element => element.key == this.idDeviceDetail);
                this.name = this.mySwitch[0]['NAME'];
                this.req = this.mySwitch[0]['REQ'];
                this.res = this.mySwitch[0]['RES'];
                this.checkStatusConnection();
                this.dataUser.loadingTrigger(false);
            }, (err) => {
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    openDialogRenameChild() {
        const dialogRef = this.dialog.open(DialogRenameChildComponent, {
            width: '450px',
            height: 'auto',
            data: this.mySwitch[0]
        });
        dialogRef.afterClosed().subscribe(arr => {
            if(arr) {
                this.dataUser.loadingTrigger(true);
                this.ngOnInit();
            }
        });
    }

    checkboxAction(arr) {
        let status = arr.currentTarget.checked;
        if (status == true) {
            // console.log('Hidupkan!');
            this.rest.onDevice(this.mySwitch[0]);
        } else {
            // console.log('Matikan!');
            this.rest.offDevice(this.mySwitch[0]);
        }
    }

    checkStatusConnection() {
        if (this.req === this.res) {
            this.status = 1;
        } else if (this.req !== this.res) {
            this.status = 2
            setTimeout(()=>{
                this.setOffline()
            }, 10000);
        }
    }

    setOffline() {
        if (this.req !== this.res) {
            this.status = 3;
        }
    }

    back() {
        this._location.back();
    }

}
