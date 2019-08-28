import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTrainingComponent } from './log-training.component';

describe('LogTrainingComponent', () => {
  let component: LogTrainingComponent;
  let fixture: ComponentFixture<LogTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
