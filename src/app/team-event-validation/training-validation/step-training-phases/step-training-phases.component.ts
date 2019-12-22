import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-training-phases',
  templateUrl: './step-training-phases.component.html',
  styleUrls: ['./step-training-phases.component.scss']
})
export class StepTrainingPhasesComponent implements OnInit {
  @Input() stepTrainingPhasesData: any; 

  constructor() { }

  ngOnInit() {
  }
}
