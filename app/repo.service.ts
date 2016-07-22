import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Repo }           from './repo';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RepoService {
  constructor (private http: Http) {}
  private heroesUrl = 'https://api.github.com/users/google/repos';  // URL to web API
  getRepos () {
    return this.http.get(this.heroesUrl)
      .map(response =>  response.json());
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to co  nsole instead
    return Observable.throw(errMsg);
  }
}
