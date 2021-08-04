import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';

@Component({
    selector: 'app-dialog-rename-device',
    templateUrl: './dialog-rename-device.component.html',
    styleUrls: ['./dialog-rename-device.component.css']
})
export class DialogRenameDeviceComponent implements OnInit {

    deviceName;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataDevice: any,
        private rest: ApiService,
        public dataUser: UserService,
        public dialogRef: MatDialogRef<DialogRenameDeviceComponent>,
        private _snackBar: MatSnackBar,
    ) { }

    ngOnInit(): void {
        this.deviceName = this.dataDevice['device_name'];
    }

    async renameDevice() {
        try {
            await this.rest.renameDevice({
                device_serial_number: this.dataDevice['device_serial_number'],
                device_name: this.deviceName,
                userId: this.dataUser.id
            }).subscribe((data)=>{
                console.log(data)
                this.dialogRef.close(data);
            },(err)=>{
                if(err) {
                    this.dialogRef.close();
                    this._snackBar.open('Terjadi kesalahan', '', {
                        duration: 1200,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                }
            }); 
        } catch (error) {
            console.log(error);
        }
    }

}
