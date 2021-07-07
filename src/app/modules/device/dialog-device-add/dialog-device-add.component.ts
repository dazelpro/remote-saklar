import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/cores/api.service';
import { UserService } from 'src/app/cores/user.service';

@Component({
    selector: 'app-dialog-device-add',
    templateUrl: './dialog-device-add.component.html',
    styleUrls: ['./dialog-device-add.component.css']
})
export class DialogDeviceAddComponent implements OnInit {

    deviceSerialNumber;

    constructor(
        private rest: ApiService,
        public dataUser: UserService,
        public dialogRef: MatDialogRef<DialogDeviceAddComponent>,
    ) { 
        dataUser.getProfile();
    }

    ngOnInit(): void {
        
    }

    async addDevice() {
        try {
            await this.rest.addDevice({
                serialNumber: this.deviceSerialNumber,
                userId: this.dataUser.id
            }).subscribe(async (data)=>{
                this.dialogRef.close(data);
            }); 
        } catch (error) {
            console.log(error);
        }
    }

}
