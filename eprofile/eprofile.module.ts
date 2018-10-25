import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EprofilePage } from './eprofile';

@NgModule({
  declarations: [
    EprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(EprofilePage),
  ],
})
export class EprofilePageModule {}
