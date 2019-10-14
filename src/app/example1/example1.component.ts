import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  public detectionCount = 0;

  get getterValue() {
    ++this.detectionCount;
    return;
  }

  handleMouseOver() {

  }

  ngOnInit(): void {
    // setInterval(() => undefined, 100);
  }
}
