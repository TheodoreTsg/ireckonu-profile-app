import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-quick-facts-score',
  templateUrl: './quick-facts-score.component.html',
  styleUrls: ['./quick-facts-score.component.sass']
})
export class QuickFactsScoreComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  constructor() { }

  ngOnInit(): void {
  }

}
