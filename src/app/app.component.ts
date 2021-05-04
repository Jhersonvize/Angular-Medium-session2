import { Component, OnInit } from '@angular/core';
import { StopSupplyUI } from './circle-progress/models/stop-supply.ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-medium-session2';

  supplyCompleteFromCircleProgress: boolean = false;
  isIncrement: boolean = true;
  percentToCircleProgress: number = 0;
  stopSupplyFromCircleProgress: boolean = false;
  messageSupplyFromCircleProgress: string = '';
  timeOut : any;


  ngOnInit() {
    this.setPercentProgressCircleAutomatically();
  }

  setPercentProgressCircleAutomatically() {
    this.timeOut = setTimeout(() => {
      this.incrementOrDecrementPercentCircleProgress(10);
      this.setPercentProgressCircleAutomatically();
    }, 1000);
  }

  clearSetTimeout() {
    clearTimeout(this.timeOut);
  }

  incrementOrDecrementPercentCircleProgress(incrementOrDecrementValue: number) {

    if (this.isIncrement && this.percentToCircleProgress === 100) {
      this.isIncrement = false;
    } else if (!this.isIncrement && this.percentToCircleProgress === 0) {
      this.isIncrement = true;
    }

    this.percentToCircleProgress = this.isIncrement ? 
                                    this.percentToCircleProgress + incrementOrDecrementValue:
                                    this.percentToCircleProgress - incrementOrDecrementValue;
  }

  supplyComplete(event: boolean) {
    this.supplyCompleteFromCircleProgress = event;
  }

  stopSupply(event: StopSupplyUI) {
    this.stopSupplyFromCircleProgress = event.stop;
    this.messageSupplyFromCircleProgress = event.message;
    if (event.stop) {
      this.clearSetTimeout();
    }
  }

}
