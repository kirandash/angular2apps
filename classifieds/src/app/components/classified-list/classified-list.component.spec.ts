import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedListComponent } from './classified-list.component';

describe('ClassifiedListComponent', () => {
  let component: ClassifiedListComponent;
  let fixture: ComponentFixture<ClassifiedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
