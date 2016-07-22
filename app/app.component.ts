import { Component } from '@angular/core';
import { RepoService } from './repo.service';
import {Repo} from "./repo";


@Component({
    selector: 'my-app',
    templateUrl: 'app/apptemp.html',
  providers: [RepoService]
})
export class AppComponent {

  errorMessage: string;
  repoes: Repo[];

  constructor(private repoService: RepoService) {
    this.getHeroes();

  }

  getHeroes() {
    this.repoService.getRepos()
      .subscribe(
        repoes => {
          this.repoes = repoes;
        console.log("repoes ",this.repoes)
        },
        error =>  this.errorMessage = <any>error);
  }

}
