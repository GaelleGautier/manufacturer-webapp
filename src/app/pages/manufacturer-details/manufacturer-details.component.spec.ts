import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { ManufacturerDetailsComponent } from './manufacturer-details.component';
import { ManufacturerService } from '../../services/manufacturer.service';
import { provideHttpClient } from '@angular/common/http';

describe('ManufacturerDetailsComponent', () => {
  let component: ManufacturerDetailsComponent;
  let fixture: ComponentFixture<ManufacturerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerDetailsComponent],
      providers: [
        provideHttpClient(),
        ManufacturerService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
