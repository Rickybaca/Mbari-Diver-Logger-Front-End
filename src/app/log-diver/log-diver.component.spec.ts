import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDiverComponent } from './log-diver.component';

describe('LogDiverComponent', () => {
  let component: LogDiverComponent;
  let fixture: ComponentFixture<LogDiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
