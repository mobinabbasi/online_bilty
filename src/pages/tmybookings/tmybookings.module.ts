import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TmybookingsPage } from './tmybookings';

@NgModule({
  declarations: [
    TmybookingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TmybookingsPage),
  ],
})
export class TmybookingsPageModule {}
