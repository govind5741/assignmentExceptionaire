import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformAssignComponent } from './myform-assign.component';

describe('MyformAssignComponent', () => {
  let component: MyformAssignComponent;
  let fixture: ComponentFixture<MyformAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyformAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyformAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
