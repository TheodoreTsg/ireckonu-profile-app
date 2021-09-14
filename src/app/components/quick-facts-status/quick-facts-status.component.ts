import {Component, Input, OnInit} from '@angular/core';
import {RetrieveQuickFacts} from "../../shared/models";

@Component({
  selector: 'app-quick-facts-status',
  templateUrl: './quick-facts-status.component.html',
  styleUrls: ['./quick-facts-status.component.sass']
})
export class QuickFactsStatusComponent implements OnInit {

  @Input() quickFacts: RetrieveQuickFacts;

  constructor() { }

  ngOnInit(): void {
  }

}
