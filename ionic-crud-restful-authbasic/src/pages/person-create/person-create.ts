import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Person } from '../../models/person';
import { RestProvider } from '../../providers/rest/rest';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-person-create',
  templateUrl: 'person-create.html',
})
export class PersonCreatePage {

  person: Person = new Person();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider, public toastCtrl: ToastController) {
  }

  save(form: NgForm){
    this.rest.createPerson(form).subscribe(
      result => {
        this.navParams.get("parentPage").getPersons(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }

}
