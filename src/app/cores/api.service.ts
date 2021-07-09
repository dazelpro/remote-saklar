import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ 
    providedIn: 'root'
})
export class ApiService {

    itemsRef: AngularFireList<any>;
    items: Observable<any[]>;

    constructor(
        private http: HttpClient,
        private DB: AngularFireDatabase
    ) { }

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
        return this.http.get(`${this.linkUrl()}/iot/devices?users=${data}`, { headers: this.getHeaders() });
    }

    getDeviceById(data) {
        return this.http.get(`${this.linkUrl()}/iot/device?users=${data.user}&device=${data.device}`, { headers: this.getHeaders() });
    }

    getDeviceByIdFB(id) {
        this.itemsRef = this.DB.list(`DEVICE/${id}/LIST`);
        return this.itemsRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
        );
    }

    addDevice(data) {
        return this.http.post(`${this.linkUrl()}/iot/device`,data, { headers: this.getHeaders() });
    }
}
