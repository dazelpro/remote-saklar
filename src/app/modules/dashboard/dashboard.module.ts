import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharesModule } from 'src/app/shares/shares.module';

@NgModule({
    declarations: [PageDashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        SharesModule
    ]
})
export class DashboardModule { }
