import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-example2-nested',
  templateUrl: './example2-nested.component.html',
  styleUrls: ['./example2-nested.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example2NestedComponent {
  @Input() public count: number;

  public detectionCount = 0;

  get getterValue() {
    ++this.detectionCount;
    return;
  }
}
