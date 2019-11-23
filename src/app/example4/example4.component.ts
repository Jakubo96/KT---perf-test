import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example4Component implements OnInit, OnDestroy {
  public timer$ = timer(0, 1000);
  public unpackedValue: number;

  private unsubscribe$ = new Subject();

  // constructor(private cdr: ChangeDetectorRef) {
  // }

  ngOnInit() {
    this.timer$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(value => {
      this.unpackedValue = value;
      // this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
