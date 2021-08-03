import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { LoadingAnimatedComponent } from './loading-animated/loading-animated.component';

@NgModule({
    declarations: [BottomNavBarComponent, TopNavBarComponent, LoadingAnimatedComponent],
    exports: [BottomNavBarComponent, TopNavBarComponent, LoadingAnimatedComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ]
})
export class SharesModule { }
