import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeviceDetailChildComponent } from './page-device-detail-child.component';

describe('PageDeviceDetailChildComponent', () => {
  let component: PageDeviceDetailChildComponent;
  let fixture: ComponentFixture<PageDeviceDetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeviceDetailChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeviceDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
