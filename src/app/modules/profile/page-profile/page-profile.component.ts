import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/cores/user.service';
@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

    constructor(
        public dataUser : UserService
    ) { 
        this.dataUser.getProfile()
    }

    ngOnInit(): void {
        console.log(this.dataUser.id)
    }

}
