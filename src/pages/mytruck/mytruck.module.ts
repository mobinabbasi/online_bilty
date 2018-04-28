import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytruckPage } from './mytruck';

@NgModule({
  declarations: [
    MytruckPage,
  ],
  imports: [
    IonicPageModule.forChild(MytruckPage),
  ],
})
export class MytruckPageModule {}
