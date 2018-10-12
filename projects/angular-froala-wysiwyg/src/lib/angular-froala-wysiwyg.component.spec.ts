import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFroalaWysiwygComponent } from './angular-froala-wysiwyg.component';

describe('AngularFroalaWysiwygComponent', () => {
  let component: AngularFroalaWysiwygComponent;
  let fixture: ComponentFixture<AngularFroalaWysiwygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFroalaWysiwygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFroalaWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
