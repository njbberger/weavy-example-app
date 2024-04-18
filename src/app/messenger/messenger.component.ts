/* import { Component } from '@angular/core';

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.css'
})
export class MessengerComponent {

} */

import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";
import { WeavyService } from "../weavy.service";

@Component({
  selector: "app-messenger",
  standalone: true,
  imports: [],
  templateUrl: "./messenger.component.html",
  styleUrl: "./messenger.component.css",
  providers: [WeavyService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MessengerComponent {
  @Input() uid!: string;

  constructor(private weavyService: WeavyService) {
    this.weavyService = weavyService;
  }
}
