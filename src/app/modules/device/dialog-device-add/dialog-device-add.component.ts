import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog-device-add',
    templateUrl: './dialog-device-add.component.html',
    styleUrls: ['./dialog-device-add.component.css']
})
export class DialogDeviceAddComponent implements OnInit {

    deviceSerialNumber;

    constructor() { }

    ngOnInit(): void {
        
    }
    close() {
        console.log(this.deviceSerialNumber)
    }

}
