import {Component, ViewChild} from '@angular/core';
import {Example3NestedComponent} from './example3-nested/example3-nested.component';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component {
  @ViewChild(Example3NestedComponent, {static: true}) nested: Example3NestedComponent;

  public count = {
    value: 0
  };

  incrementValue() {
    ++this.count.value;
    // this.count = {...this.count};
    // this.nested.cdr.markForCheck();
    // this.nested.cdr.detectChanges();
  }
}
