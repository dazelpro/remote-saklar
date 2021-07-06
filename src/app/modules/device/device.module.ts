import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDeviceListComponent } from './page-device-list/page-device-list.component';
import { DeviceRoutingModule } from './device-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharesModule } from 'src/app/shares/shares.module';

@NgModule({
    declarations: [PageDeviceListComponent],
    imports: [
        CommonModule,
        DeviceRoutingModule,
        MaterialModule,
        SharesModule
    ]
})
export class DeviceModule { }
