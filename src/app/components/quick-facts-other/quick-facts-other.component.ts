import {Component, Input, OnInit} from '@angular/core';
import {RetrieveQuickFacts} from "../../shared/models";

@Component({
  selector: 'app-quick-facts-other',
  templateUrl: './quick-facts-other.component.html',
  styleUrls: ['./quick-facts-other.component.sass']
})
export class QuickFactsOtherComponent implements OnInit {

  @Input() quickFacts: RetrieveQuickFacts;

  constructor() { }

  ngOnInit(): void {
  }

}
