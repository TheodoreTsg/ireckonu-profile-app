import { Component, OnInit } from '@angular/core';
import {ResourcesService} from "./services/resources.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ireckonu-profile-app';

  constructor(
    private resourcesService: ResourcesService
  ) {
  }

  ngOnInit() {
    this.resourcesService.initialize();
  }
}
