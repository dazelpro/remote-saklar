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

    linkUrl() {
        return environment.urlApi;
    }

    authUser(data) {
        return this.http.post(`${this.linkUrl()}/iot/auth`,data);
    }

    getDevice(data) {
        return this.http.get(`${this.linkUrl()}/iot/device?users=${data}`);
    }
}
