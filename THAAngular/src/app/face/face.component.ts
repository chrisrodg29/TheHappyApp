import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SatisfactionResultsService } from '../shared/assessment-services/satisfaction-results.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  @ViewChild('mouthPath') mouthPath: ElementRef;
  baseMouthCoordinates = [112, 119, 0, 1, -5, 5, -11, 5, -6, 0, -10, -3, -10, -4, 0, -1, 4, 3, 10, 3, 6, 0, 11, -5, 11, -4];

  loopedOnce = false;

  animationInterval;
  intervalTicks = 0;
  animationState = 10;
  changeDifference = 1;
  animationDirection = 'sadder';


  constructor(private satResultsServ: SatisfactionResultsService) { }

  ngOnInit(): void {
    this.satResultsServ.scoreEmitter.subscribe(
      (score: number) => this.changeFaceExpression(score)
    );
    this.satResultsServ.finishedReading.subscribe(
      (bool: boolean) => this.resetFace()
    );
  }

  resetFace() {
    this.changeFaceExpression(10);
  }

  changeFaceExpression(newState: number) {
    if (newState > this.animationState) {
      this.animationDirection = 'happier';
    } else if (newState < this.animationState) {
      this.animationDirection = 'sadder';
    }

    if (newState !== this.animationState) {
      this.changeDifference = Math.abs(newState - this.animationState);
      this.animationInterval = setInterval(this.transform.bind(this), 16);
      this.animationState = newState;
    }

  }

  transform() {
    let preppedCoordinateArr = this.manipulationPrep();

    for (let i = 0; i < preppedCoordinateArr.length; i++) {
      // if the index if even, skip that index
      if (i % 2 === 0) { continue; }

      // modifier to adjust pixel change
      let mod = 0.08;

      // reverse direction depending changeDirection
      if (this.animationDirection === 'happier') {
        mod = -mod;
      }

      // adjust specific coordinates in mouthpath array
      switch (i) {
        case 7:
        case 19:
        case 5:
        case 17:
          preppedCoordinateArr[i] -= 1 * mod;
          break;
        case 5:
        case 17:
          preppedCoordinateArr[i] -= 1 * mod;
          break;
        case 1:
          preppedCoordinateArr[i] += .15 * mod;
          break;
        case 11:
        case 13:
        case 23:
        case 25:
          preppedCoordinateArr[i] += 1 * mod;
          break;
      }
    }

    // REBUILD AND RESET "d"
    let rebuild = [];
    for (let i = 0; i < preppedCoordinateArr.length; i++) {
      if (i % 2 === 0) {
        rebuild.push(preppedCoordinateArr[i].toFixed(2) + ',' + preppedCoordinateArr[i + 1].toFixed(2));
      }
    }

    let newD = 'm ' + rebuild[0] + ' c ' + rebuild.slice(1).join(' ') + ' z';
    this.mouthPath.nativeElement.setAttribute('d', newD);

    this.intervalTicks++;
    if (this.intervalTicks === 10 * this.changeDifference) {
      clearInterval(this.animationInterval);
      this.intervalTicks = 0;
      this.changeDifference = 1;
    }

  }

  manipulationPrep() {
    let originalD = this.mouthPath.nativeElement.getAttribute('d');

    // Collecting coordinates
    let pathArr = originalD.split(' ');
    let coordinateArr = pathArr.slice(3, pathArr.length - 1);
    coordinateArr.unshift(pathArr[1]);

    // Individual coordinate prep
    let preppedCoordinateArr = [];
    for (let x of coordinateArr) {
      let pair = x.split(',');
      preppedCoordinateArr.push(parseFloat(pair[0]));
      preppedCoordinateArr.push(parseFloat(pair[1]));
    }

    return preppedCoordinateArr;
  }

}
