import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimatedComponent } from './loading-animated.component';

describe('LoadingAnimatedComponent', () => {
  let component: LoadingAnimatedComponent;
  let fixture: ComponentFixture<LoadingAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingAnimatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
