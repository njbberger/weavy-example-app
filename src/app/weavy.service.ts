import { Injectable, OnDestroy } from "@angular/core";
import {Weavy} from "@weavy/uikit-web";

@Injectable({
  providedIn: "root",
})
export class WeavyService implements OnDestroy {
  weavy = new Weavy();

  constructor() {
    this.weavy.url = new URL("https://myenvironment.weavy.io");
    this.weavy.tokenUrl = new URL("https://myserver.test/api/token");
  }

  ngOnDestroy(): void {
    this.weavy.destroy();
  }
}
