import { ManufacturerService } from './manufacturer.service';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ManufacturerService', () => {
  let service: ManufacturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Utilisez provideHttpClient pour configurer HttpClient
        ManufacturerService,
      ],
    });
    service = TestBed.inject(ManufacturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
