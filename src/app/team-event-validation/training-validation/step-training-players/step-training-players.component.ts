import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-step-training-players',
  templateUrl: './step-training-players.component.html',
  styleUrls: ['./step-training-players.component.scss']
})
export class StepTrainingPlayersComponent implements OnInit {
  @Input() stepTrainingPlayersData: any; 
  @Output() stepTrainingPlayersEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  outputData(data) {
    this.stepTrainingPlayersEmitter.emit(data);
  }
}
