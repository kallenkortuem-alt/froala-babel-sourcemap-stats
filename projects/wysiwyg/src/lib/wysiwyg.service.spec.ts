import { TestBed, inject } from '@angular/core/testing';

import { WysiwygService } from './wysiwyg.service';

describe('WysiwygService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WysiwygService]
    });
  });

  it('should be created', inject([WysiwygService], (service: WysiwygService) => {
    expect(service).toBeTruthy();
  }));
});
