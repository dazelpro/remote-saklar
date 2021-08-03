import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRenameDeviceComponent } from './dialog-rename-device.component';

describe('DialogRenameDeviceComponent', () => {
  let component: DialogRenameDeviceComponent;
  let fixture: ComponentFixture<DialogRenameDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRenameDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRenameDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
