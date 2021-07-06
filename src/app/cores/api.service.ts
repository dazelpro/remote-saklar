import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ 
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getHeaders() {
        const token = localStorage.getItem('token');
        return token ? new HttpHeaders().set('Authorization', token) : null;
    }

    link_url() {
        return environment.urlApi;
    }

    auth_user(data) {
        return this.http.post(`${this.link_url()}/iot/auth`,data);
    }
}