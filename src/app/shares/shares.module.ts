import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [BottomNavBarComponent, TopNavBarComponent],
    exports: [BottomNavBarComponent, TopNavBarComponent],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class SharesModule { }
