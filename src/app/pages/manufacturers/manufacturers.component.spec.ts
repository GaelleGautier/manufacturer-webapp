import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { ManufacturerService } from '../../services/manufacturer.service';
import { ManufacturersComponent } from './manufacturers.component';
import { provideHttpClient } from '@angular/common/http';

describe('ManufacturersComponent', () => {
  let component: ManufacturersComponent;
  let fixture: ComponentFixture<ManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturersComponent],
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

    fixture = TestBed.createComponent(ManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
