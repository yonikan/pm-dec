import { Component, OnInit } from '@angular/core';
import { TeamEventValidationService } from '../team-event-validation.service';

@Component({
  selector: 'app-training-validation',
  templateUrl: './training-validation.component.html',
  styleUrls: ['./training-validation.component.scss']
})
export class TrainingValidationComponent implements OnInit {
  traininfData: any;

  constructor(private teamEventValidationService: TeamEventValidationService) { }

  ngOnInit() {
    this.traininfData = this.teamEventValidationService.getTrainingData();
  }

}
