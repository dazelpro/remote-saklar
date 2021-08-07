import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    dataUser;
    id;
    name;
    last_name;
    email;
    image;
    task;

    spinner;

    constructor(
        private router: Router
    ) { 
        router.events.subscribe((val) => {
            this.spinner = true;
        });
    }

    async getProfile() {
        if (localStorage.getItem('token') !== null) {
            if (localStorage.getItem('auth') !== null) {
                this.dataUser = JSON.parse(localStorage.getItem('auth'));
                if (this.dataUser['usr']['id'] !== undefined && this.dataUser['usr']['id'] !== '' && this.dataUser['usr']['email'] !== undefined && this.dataUser['usr']['name'] !== undefined && this.dataUser['usr']['img'] !== undefined) {
                    this.id = this.dataUser['usr']['id'];
                    this.name = this.dataUser['usr']['name'];
                    this.last_name = this.dataUser['usr']['lastName'];
                    this.email = this.dataUser['usr']['email'];
                    this.image = this.dataUser['usr']['img'];
                } else {
                    localStorage.clear();
                    this.router.navigate(['/login']);
                }
            } else {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
        } else {
            localStorage.clear();
            this.router.navigate(['/login']);
        }
    }

    loadingTrigger(arr) {
        this.spinner = arr;
    }

}
