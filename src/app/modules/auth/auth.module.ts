import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SharesModule } from 'src/app/shares/shares.module';



@NgModule({
    declarations: [PageLoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule,
        SharesModule
    ]
})
export class AuthModule { }
