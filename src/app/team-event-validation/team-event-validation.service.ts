import { Injectable } from '@angular/core';
import { TrainingValidation, MatchValidation } from './team-event-validation.model';

@Injectable({
  providedIn: 'root'
})
export class TeamEventValidationService {
  trainingData: TrainingValidation = {
    step1OverviewData: {

    },
    step2PlayersData: {
      
    },
    step3PhasesData: {
      
    }
  };
  matchgData: MatchValidation = {
    step1OverviewData: {

    },
    step2PlayersData: {
      
    },
    step3FormationsData: {
      
    },
    step4PhasesData: {
      
    },
    step5SubsData: {
      
    }
  };

  constructor() { }

  getTrainingData(): any {
    return {
      step1OverviewData: {

      },
      step2PlayersData: {
        
      },
      step3PhasesData: {
        
      }
    };
  }

  getMatchData(): any {
    return {
      step1OverviewData: {

      },
      step2PlayersData: {
        
      },
      step3FormationsData: {
        
      },
      step4PhasesData: {
        
      },
      step5SubsData: {
        
      }
    };
  }

  validateTraining() {
    // sends this.trainingData to the backend
  }

  validateMatch() {
    // sends this.matchgData to the backend
  }
}
