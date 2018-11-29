import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonCreatePage } from './person-create';

@NgModule({
  declarations: [
    PersonCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonCreatePage),
  ],
})
export class PersonCreatePageModule {}
