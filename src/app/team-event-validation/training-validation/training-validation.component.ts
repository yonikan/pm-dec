import { Component, OnInit } from '@angular/core';
import { TeamEventValidationService } from '../team-event-validation.service';

@Component({
  selector: 'app-training-validation',
  templateUrl: './training-validation.component.html',
  styleUrls: ['./training-validation.component.scss']
})
export class TrainingValidationComponent implements OnInit {
  step1Data: any;
  step2Data: any;
  step3Data: any;
  trainingValidationPayload;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    const trainingData = this.teamEventValidationService.getTrainingData();
    this.step1Data = trainingData.step1Data;
    this.step2Data = trainingData.step2Data;
    this.step3Data = trainingData.step3Data;
  }

  validateTraining() {
    this.teamEventValidationService.validateTraining();
  }
}
