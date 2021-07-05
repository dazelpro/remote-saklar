import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [PageLoginComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MaterialModule
    ]
})
export class AuthModule { }
