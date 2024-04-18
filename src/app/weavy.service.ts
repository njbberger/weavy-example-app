import { Injectable, OnDestroy } from "@angular/core";
import {Weavy} from "@weavy/uikit-web";

@Injectable({
  providedIn: "root",
})
export class WeavyService implements OnDestroy {
  weavy = new Weavy();

  constructor() {
 
    //this.weavy.url = new URL("https://myenvironment.weavy.io");
    this.weavy.url = new URL("https://b702dd414eb54ed29c29e70cec95c699.weavy.io");

    //this.weavy.tokenUrl = new URL("https://myserver.test/api/token");
    //this.weavy.tokenUrl = new URL("https://localhost:7126/api/token?refresh=true");
    this.weavy.tokenUrl = new URL("https://localhost:7126/api/token?UserName=user2_Client1&Statum=0&EmailAddress=NJB%40mail.com&DisplayName=NJB&Password=NJB&OrgId=NJB&OrgRoleName=Dir_test&refresh=false");

    //user2_Client1

    /* // configure Weavy with tokenFactory
    this.weavy.tokenFactory = async (refresh) => {

      // fetch access_token from server
      const response = await fetch("https://localhost:7126/api/token?UserName=NJB&Statum=0&EmailAddress=njb&DisplayName=sdfds&Password=fds&OrgRoleName=fsdf&refresh=" + refresh);

      if (response.ok) {
        let data = await response.json();
        //const token = await response.text().access_token;

        // return access_token to UIKit
        return data.access_token;
        //return token;
      } 
      else 
      {
        throw new Error("Could not fetch token from endpoint");
      }
    }; */



    /* const weavy = new Weavy({
      url: new URL("https://f075cd1672b24d388bbec498ebe7e762.weavy.io"),
      reactions: ["👍", "❤️", "😂", "😒", "😁"],
      // zoomAuthenticationUrl: "%WEAVY_ZOOM_AUTH_URL%",
      // confluenceAuthenticationUrl: "%WEAVY_CONFLUENCE_AUTH_URL%",
      // confluenceProductName: "%WEAVY_CONFLUENCE_PRODUCT_NAME%",
    });

    weavy.tokenFactory = async (refresh) => {
      let response = await fetch(`/api/token${refresh ? "?refresh=true" : ""}`);

      if (response.ok) {
        let data = await response.json();
        return data.access_token;
      } else {
        throw new Error("Could not get access token from server!");
      }
    }; */

  }

  ngOnDestroy(): void {
    this.weavy.destroy();
  }
}