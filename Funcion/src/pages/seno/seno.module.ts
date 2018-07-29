import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenoPage } from './seno';

@NgModule({
  declarations: [
    SenoPage,
  ],
  imports: [
    IonicPageModule.forChild(SenoPage),
  ],
})
export class SenoPageModule {}
