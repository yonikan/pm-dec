import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-training-general',
  templateUrl: './step-training-general.component.html',
  styleUrls: ['./step-training-general.component.scss']
})
export class StepTrainingGeneralComponent implements OnInit {
  trainingTags;
  constructor() { }

  ngOnInit() {
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.trainingTags = tags;
  }
}
