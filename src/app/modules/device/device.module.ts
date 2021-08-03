import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDeviceListComponent } from './page-device-list/page-device-list.component';
import { DeviceRoutingModule } from './device-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharesModule } from 'src/app/shares/shares.module';
import { DialogDeviceAddComponent } from './dialog-device-add/dialog-device-add.component';
import { FormsModule } from '@angular/forms';
import { PageDeviceDetailParentComponent } from './page-device-detail-parent/page-device-detail-parent.component';
import { PageDeviceDetailChildComponent } from './page-device-detail-child/page-device-detail-child.component';
import { DialogRenameDeviceComponent } from './page-device-detail-parent/dialog-rename-device/dialog-rename-device.component';

@NgModule({
    declarations: [PageDeviceListComponent, DialogDeviceAddComponent, PageDeviceDetailParentComponent, PageDeviceDetailChildComponent, DialogRenameDeviceComponent],
    imports: [
        CommonModule,
        DeviceRoutingModule,
        MaterialModule,
        SharesModule,
        FormsModule
    ]
})
export class DeviceModule { }
