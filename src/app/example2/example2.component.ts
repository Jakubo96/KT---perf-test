import {Component} from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {
  public count = 0;
  public detectionCount = 0;

  incrementValue() {
    ++this.count;
  }

  doSthElse() {

  }

  get getterValue() {
    ++this.detectionCount;
    return;
  }
}
