import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example4Component implements OnInit, OnDestroy {
  public timer$ = timer(0, 1000);
  public unpackedValue: number;

  private subscription = new Subscription();

  // constructor(private cdr: ChangeDetectorRef) {
  // }

  ngOnInit() {
    this.subscription = this.timer$.subscribe(value => {
      this.unpackedValue = value;
      // this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
