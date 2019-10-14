import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3NestedComponent } from './example3-nested.component';

describe('Example2NestedComponent', () => {
  let component: Example3NestedComponent;
  let fixture: ComponentFixture<Example3NestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example3NestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example3NestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
