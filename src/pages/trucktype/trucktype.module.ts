import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrucktypePage } from './trucktype';

@NgModule({
  declarations: [
    TrucktypePage,
  ],
  imports: [
    IonicPageModule.forChild(TrucktypePage),
  ],
})
export class TrucktypePageModule {}
