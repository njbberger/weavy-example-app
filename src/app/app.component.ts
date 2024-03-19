import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, ChatComponent],
})
export class AppComponent {
  title = "weavy-example-app";
}

