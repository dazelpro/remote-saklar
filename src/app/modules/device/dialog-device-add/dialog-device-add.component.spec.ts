import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeviceAddComponent } from './dialog-device-add.component';

describe('DialogDeviceAddComponent', () => {
  let component: DialogDeviceAddComponent;
  let fixture: ComponentFixture<DialogDeviceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeviceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
