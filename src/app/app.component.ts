import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";
import { MessengerComponent } from "./messenger/messenger.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, ChatComponent, MessengerComponent],
})
export class AppComponent {
  title = "weavy-example-app: CHAT & MESSENGER";
}

