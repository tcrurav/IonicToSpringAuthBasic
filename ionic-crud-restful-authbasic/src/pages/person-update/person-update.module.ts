import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonUpdatePage } from './person-update';

@NgModule({
  declarations: [
    PersonUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonUpdatePage),
  ],
})
export class PersonUpdatePageModule {}
