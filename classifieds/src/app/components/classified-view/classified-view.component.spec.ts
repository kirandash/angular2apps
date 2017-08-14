import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedViewComponent } from './classified-view.component';

describe('ClassifiedViewComponent', () => {
  let component: ClassifiedViewComponent;
  let fixture: ComponentFixture<ClassifiedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
