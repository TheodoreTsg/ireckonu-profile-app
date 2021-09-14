import {Component, Input, OnInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {RetrieveQuickFacts} from "../../shared/models";

@Component({
  selector: 'app-quick-facts-score',
  templateUrl: './quick-facts-score.component.html',
  styleUrls: ['./quick-facts-score.component.sass']
})
export class QuickFactsScoreComponent implements OnInit {
  @Input() quickFacts: RetrieveQuickFacts;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  constructor() { }

  ngOnInit(): void {
    this.value = this.quickFacts.rfmScore.total;
  }

}
