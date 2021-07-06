import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';



@NgModule({
  declarations: [BottomNavBarComponent, TopNavBarComponent],
  imports: [
    CommonModule
  ]
})
export class SharesModule { }
