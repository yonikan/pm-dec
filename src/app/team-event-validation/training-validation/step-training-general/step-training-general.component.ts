import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-step-training-general',
  templateUrl: './step-training-general.component.html',
  styleUrls: ['./step-training-general.component.scss']
})
export class StepTrainingGeneralComponent implements OnInit {
  @Input() stepTrainingGeneralData: any; 
  @Output() stepTrainingGeneralEmitter = new EventEmitter<any>();
  trainingTags;

  constructor() { }

  ngOnInit() {
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.trainingTags = tags;
  }

  outputData(data) {
    this.stepTrainingGeneralEmitter.emit(data);
  }
}
