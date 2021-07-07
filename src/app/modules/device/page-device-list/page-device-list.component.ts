import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';
import { DialogDeviceAddComponent } from '../dialog-device-add/dialog-device-add.component';

@Component({
    selector: 'app-page-device-list',
    templateUrl: './page-device-list.component.html',
    styleUrls: ['./page-device-list.component.css']
})
export class PageDeviceListComponent implements OnInit {

    myDevice: Object;

    constructor(
        private rest: ApiService,
        public dataUser: UserService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar,
    ) { 
        dataUser.getProfile();
    }

    async ngOnInit() {
        try {
            await this.rest.getDevice(this.dataUser.id).subscribe(async (data) => {
                this.myDevice = data['data'];
            }, (err) => {
                console.log(err);
                // this.loading = false;
                this._snackBar.open('Server sedang sibuk', '', {
                    duration: 1000,
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    dialogDeviceAdd() {
        const dialogRef = this.dialog.open(DialogDeviceAddComponent, {
            width: '600px',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(arr => {
            if(arr) {
                if (arr.success) {
                    this.ngOnInit();
                }
            }
        });
    }

    detailDevice(arr) {
        console.log(arr)
    }

}
