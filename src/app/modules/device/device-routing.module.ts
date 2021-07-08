import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageDeviceListComponent } from './page-device-list/page-device-list.component';
import { PageDeviceDetailParentComponent } from './page-device-detail-parent/page-device-detail-parent.component';
import { PageDeviceDetailChildComponent } from './page-device-detail-child/page-device-detail-child.component';

const routes: Routes = [
    {
        path: '',
        component: PageDeviceListComponent
    },
    {
        path: ':parent',
        component: PageDeviceDetailParentComponent
    },
    {
        path: ':parent/:child',
        component: PageDeviceDetailChildComponent
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
