import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousService } from './cores/anonymous.service';
import { AuthService } from './cores/auth.service';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './modules/auth/auth.module#AuthModule',
        canActivate: [AnonymousService]
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthService]
    },
    {
        path: 'device',
        loadChildren: './modules/device/device.module#DeviceModule',
        canActivate: [AuthService]
    },
    {
        path: 'profile',
        loadChildren: './modules/profile/profile.module#ProfileModule',
        canActivate: [AuthService]
    },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class RoutingModule { }
