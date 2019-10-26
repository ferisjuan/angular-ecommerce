import { TestBed } from '@angular/core/testing';

import { Menu.ServiceService } from './menu.service.service';

describe('Menu.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Menu.ServiceService = TestBed.get(Menu.ServiceService);
    expect(service).toBeTruthy();
  });
});
