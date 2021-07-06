import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharesModule } from 'src/app/shares/shares.module';

@NgModule({
    declarations: [PageProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MaterialModule,
        SharesModule
    ]
})
export class ProfileModule { }
