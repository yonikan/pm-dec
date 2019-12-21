import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamEventValidationService {

  constructor() { }

  getTrainingData(): any {
    return {
      step1Data: {

      },
      step2Data: {
        
      },
      step3Data: {
        
      }
    };
  }

  getMatchData(): any {
    return {
      step1Data: {

      },
      step2Data: {
        
      },
      step3Data: {
        
      },
      step4Data: {
        
      },
      step5Data: {
        
      }
    };
  }

  validtaeTraining(trainingValidationPayload) {
    console.log('trainingValidationPayload: ', trainingValidationPayload);
  }

  validtaeMatch() {

  }
}
