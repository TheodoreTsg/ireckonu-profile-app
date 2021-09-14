import {Component, Input, OnInit} from '@angular/core';
import {RetrieveQuickFacts} from "../../shared/models";

@Component({
  selector: 'app-quick-facts-top',
  templateUrl: './quick-facts-top.component.html',
  styleUrls: ['./quick-facts-top.component.sass']
})
export class QuickFactsTopComponent implements OnInit {

  @Input() quickFacts: RetrieveQuickFacts;

  constructor() { }

  ngOnInit(): void {
  }

}
