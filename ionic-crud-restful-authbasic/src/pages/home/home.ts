import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Person } from '../../models/person';
import { PersonCreatePage } from '../person-create/person-create';
import { PersonUpdatePage } from '../person-update/person-update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private persons: Array<Person>;
  private errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) { }

  ionViewDidLoad(){
    this.getPersons();
  }

  getPersons(): any {
    this.rest.getPersons().subscribe(
      persons => this.persons = persons,
      error => this.errorMessage = error
    );
  }

  showPersonById(personId: number){
    this.getPersonById(personId);
  }

  getPersonById(personId: number): any {
    this.rest.getPersonById(personId).subscribe(
      (person: Person) => console.log(JSON.stringify(person)),
      error => this.errorMessage = error
    );
  }

  createPerson(){
    this.navCtrl.push(PersonCreatePage, { "parentPage": this });
  }

  updatePerson(person: Person){
    this.navCtrl.push(PersonUpdatePage, { person: person, "parentPage": this });
  }

  deletePersonById(personId: number){
    this.rest.deletePersonById(personId).subscribe(
      data => this.persons.splice(
                this.persons.map(item => item.id).indexOf(personId), 1),
      error => this.errorMessage = error
    );
  }
}
