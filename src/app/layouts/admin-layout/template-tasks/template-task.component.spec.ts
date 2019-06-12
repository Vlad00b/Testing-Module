import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTaskComponent } from './template-task.component';

describe('TemplateTaskComponent', () => {
  let component: TemplateTaskComponent;
  let fixture: ComponentFixture<TemplateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
