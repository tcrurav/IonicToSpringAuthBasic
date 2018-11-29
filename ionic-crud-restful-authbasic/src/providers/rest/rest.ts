import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Person } from '../../models/person';

@Injectable()
export class RestProvider {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  private getOptions(){
    let user = "juan";
    let password = "juan";
    let base64UserAndPasswordJuan = window.btoa(user + ":" + password);

    let basico = 'basic ' + base64UserAndPasswordJuan;

    let options = {
      headers: {
        //'Access-Control-Allow-Origin' : 'http://localhost:8100',
        'Authorization' : basico,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }

  public getPersons(): Observable<Person[]> {

    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/persons', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getPersonById(personId: number): Observable<Person> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/person/' + personId, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createPerson(person: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', person.name);
    urlSearchParams.append('age', person.age);
    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/person', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updatePerson(person: any, personId: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', person.name);
    urlSearchParams.append('age', person.age);
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/person/' + personId, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deletePersonById(personId: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/person/' + personId, options).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    console.log(JSON.stringify(body));
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
