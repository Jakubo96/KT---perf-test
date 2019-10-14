import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example4Component implements OnInit {
  public timer$ = timer(0, 1000);
  public unpackedValue: number;

  // constructor(private cdr: ChangeDetectorRef) {
  // }

  ngOnInit() {
    this.timer$.subscribe(value => {
      this.unpackedValue = value;
      // this.cdr.markForCheck();
    });
  }
}
