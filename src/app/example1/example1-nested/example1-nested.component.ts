import {Component} from '@angular/core';

@Component({
  selector: 'app-example1-nested',
  templateUrl: './example1-nested.component.html',
  styleUrls: ['./example1-nested.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example1NestedComponent {
  public detectionCount = 0;

  get getterValue() {
    ++this.detectionCount;
    return;
  }
}
