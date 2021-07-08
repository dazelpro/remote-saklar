import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeviceDetailParentComponent } from './page-device-detail-parent.component';

describe('PageDeviceDetailParentComponent', () => {
  let component: PageDeviceDetailParentComponent;
  let fixture: ComponentFixture<PageDeviceDetailParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeviceDetailParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeviceDetailParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
