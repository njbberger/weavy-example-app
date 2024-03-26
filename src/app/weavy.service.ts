import { Injectable, OnDestroy } from "@angular/core";
import {Weavy} from "@weavy/uikit-web";

@Injectable({
  providedIn: "root",
})
export class WeavyService implements OnDestroy {
  weavy = new Weavy();

  constructor() {
    //this.weavy.url = new URL("https://myenvironment.weavy.io");
    this.weavy.url = new URL("https://f075cd1672b24d388bbec498ebe7e762.weavy.io");

    //this.weavy.tokenUrl = new URL("https://myserver.test/api/token");
    this.weavy.tokenUrl = new URL("https://localhost:7126/api/token?refresh=true");
    this.weavy.tokenUrl = new URL("https://localhost:7126/api/token?UserName=njb&Statum=0&EmailAddress=norbi88njb%40gmail.com&DisplayName=Norber&Password=Berger&OrgRoleName=rol&refresh=false");
  }

  ngOnDestroy(): void {
    this.weavy.destroy();
  }
}