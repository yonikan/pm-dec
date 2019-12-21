import { Component, OnInit } from '@angular/core';
import { TeamEventValidationService } from '../team-event-validation.service';

@Component({
  selector: 'app-training-validation',
  templateUrl: './training-validation.component.html',
  styleUrls: ['./training-validation.component.scss']
})
export class TrainingValidationComponent implements OnInit {
  selectedIndex = 0;
  step1Data: any;
  step2Data: any;
  step3Data: any;
  trainingValidationPayload;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    const traininfData = this.teamEventValidationService.getTrainingData();
    this.step1Data = traininfData.step1Data;
    this.step2Data = traininfData.step2Data;
    this.step3Data = traininfData.step3Data;
  }

  onStepTrainingGeneral(handledData) {
    // console.log('handledData: ', handledData);
    this.trainingValidationPayload.stepTrainingGeneral = handledData;
  }

  onStepTrainingPlayers(handledData) {
    // console.log('handledData: ', handledData);
    this.trainingValidationPayload.stepTrainingPlayers = handledData;
  }

  onStepTrainingPhases(handledData) {
    // console.log('handledData: ', handledData);
    this.trainingValidationPayload.stepTrainingPhases = handledData;
    this.validateSession(); // last step
  }

  validateSession() {
    this.teamEventValidationService.validtaeTraining(this.trainingValidationPayload);
  }
}
