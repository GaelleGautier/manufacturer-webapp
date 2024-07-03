import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManufacturerComponent } from './add-manufacturer.component';
import { ManufacturerService } from '../../services/manufacturer.service';
import { provideHttpClient } from '@angular/common/http';

describe('AddManufacturerComponent', () => {
  let component: AddManufacturerComponent;
  let fixture: ComponentFixture<AddManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddManufacturerComponent],
      providers: [provideHttpClient(), ManufacturerService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
