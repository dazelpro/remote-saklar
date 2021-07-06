import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageDeviceListComponent } from './page-device-list/page-device-list.component';

const routes: Routes = [
    {
        path: '',
        component: PageDeviceListComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class DeviceRoutingModule { }
