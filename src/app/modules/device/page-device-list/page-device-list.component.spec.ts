import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeviceListComponent } from './page-device-list.component';

describe('PageDeviceListComponent', () => {
  let component: PageDeviceListComponent;
  let fixture: ComponentFixture<PageDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
