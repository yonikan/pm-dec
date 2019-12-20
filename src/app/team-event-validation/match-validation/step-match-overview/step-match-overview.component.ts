import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-match-overview',
  templateUrl: './step-match-overview.component.html',
  styleUrls: ['./step-match-overview.component.scss']
})
export class StepMatchOverviewComponent implements OnInit {
  matchesTags;
  constructor() { }

  ngOnInit() {
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.matchesTags = tags;
  }
}
