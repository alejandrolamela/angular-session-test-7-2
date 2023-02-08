import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComitComponent } from './edit-comit.component';

describe('EditComitComponent', () => {
  let component: EditComitComponent;
  let fixture: ComponentFixture<EditComitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
