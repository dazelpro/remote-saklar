import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/cores/api.service';

@Component({
    selector: 'app-page-device-list',
    templateUrl: './page-device-list.component.html',
    styleUrls: ['./page-device-list.component.css']
})
export class PageDeviceListComponent implements OnInit {

    constructor(
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        try {
            await this.rest.getDevice('eerer').subscribe(async (data) => {
                console.log(data)
            }, (err) => {
                console.log(err);
                // this.loading = false;
                // this._snackBar.open('Server sedang sibuk', '', {
                //     duration: 1000,
                // });
            });
        } catch (error) {
            console.log(error);
        }
    }

}
