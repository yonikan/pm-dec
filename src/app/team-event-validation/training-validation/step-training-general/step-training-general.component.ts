import { Component, OnInit, Input } from '@angular/core';
import { TeamEventValidationService } from '../../team-event-validation.service';

@Component({
  selector: 'app-step-training-general',
  templateUrl: './step-training-general.component.html',
  styleUrls: ['./step-training-general.component.scss']
})
export class StepTrainingGeneralComponent implements OnInit {
  @Input() stepTrainingGeneralData: any;
  trainingDuration;
  trainingTags;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
  }

  onTagsEmitter(tags) {
    console.log(tags);
    this.trainingTags = tags;
    // this.teamEventValidationService.matchgData.step1OverviewData = tags; // test the service
    // console.log('this.teamEventValidationService.matchgData.step1OverviewData: ', this.teamEventValidationService.matchgData.step1OverviewData);
  }
}
