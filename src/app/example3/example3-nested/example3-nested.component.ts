import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
  selector: 'app-example3-nested',
  templateUrl: './example3-nested.component.html',
  styleUrls: ['./example3-nested.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example3NestedComponent {
  @Input() public count: { value: number };

  // constructor(public cdr: ChangeDetectorRef) {
  //   // cdr.detach();
  // }
}
