import { TestBed, inject } from '@angular/core/testing';

import { AngularFroalaWysiwygService } from './angular-froala-wysiwyg.service';

describe('AngularFroalaWysiwygService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFroalaWysiwygService]
    });
  });

  it('should be created', inject([AngularFroalaWysiwygService], (service: AngularFroalaWysiwygService) => {
    expect(service).toBeTruthy();
  }));
});
