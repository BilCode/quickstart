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
    this.getHeroes("google");
  }

  getHeroes(reponame:String) {
    this.repoService.getRepos(reponame)
      .subscribe(
        repoes => {
          this.repoes = repoes;
          console.log("repoes ",this.repoes)
        },
        error =>  this.errorMessage = <any>error);
  }

  // with strong typing
  onKey(event: KeyboardEvent) {
    this.getHeroes((<HTMLInputElement>event.target).value);
  }

}
