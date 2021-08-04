import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRenameChildComponent } from './dialog-rename-child.component';

describe('DialogRenameChildComponent', () => {
  let component: DialogRenameChildComponent;
  let fixture: ComponentFixture<DialogRenameChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRenameChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRenameChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
