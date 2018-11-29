import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person';
import { NgForm } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-person-update',
  templateUrl: 'person-update.html',
})
export class PersonUpdatePage {

  person: Person = new Person();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) { 
    this.person = this.navParams.get('person');
  }

  save(form: NgForm){
    this.rest.updatePerson(form, this.person.id).subscribe(
      result => {
        this.navParams.get("parentPage").getPersons(); //refresh parent page person data
        this.navCtrl.pop();
      }, 
      error => console.log(error)
    );
  }
}
