import { Alias, Manufacturer } from '../../interfaces/manufacturer';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manufacturer-details.component.html',
  styleUrl: './manufacturer-details.component.css',
})
export class ManufacturerDetailsComponent implements OnInit {
  public manufacturer!: Manufacturer;
  public manufacturerForm!: FormGroup;
  public reviewStates: string[] = [];

  constructor(
    private manufacturerService: ManufacturerService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.manufacturerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      address: ['', [Validators.required]],
      headquarterCountryCode: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2}$/)]],
      category: ['', [Validators.required]],
      catalogSize: [0, [Validators.required]],
      reviewState: ['', [Validators.required]],
      aliases: this.formBuilder.array([]),
    });

    this.getManufacturer(this.route.snapshot.params['id']);
    this.reviewStates = this.manufacturerService.availableReviewStates;
  }

  getManufacturer(id: number): void {
    this.manufacturerService.get(id).subscribe({
      next: data => {
        this.manufacturer = data;
        this.manufacturerForm.patchValue(data);

        data.aliases.forEach((alias: Alias) => {
          this.aliases.push(this.formBuilder.group({ name: alias.name }));
        });
        if (data.aliases.length === 0) {
          this.addAlias();
        }
      },
      error: error => {
        console.error(error);
      },
    });
  }

  get form() {
    return this.manufacturerForm.controls;
  }

  get aliases() {
    return this.manufacturerForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.group({ name: '' }));
  }

  deleteAlias(index: number) {
    if (confirm('Are you sure to delete this alias ?')) {
      this.aliases.removeAt(index);
    }
  }

  onSubmit() {
    this.manufacturerService.patch(this.manufacturer.id, this.manufacturerForm.value).subscribe({
      next: () => {
        this.router.navigate(['manufacturer']);
      },
      error: error => {
        console.error(error);
      },
    });
  }

  deleteManufacturer(): void {
    if (!this.manufacturer) {
      console.error('Manufacturer is undefined');
      return;
    }
    if (confirm('Are you sure to delete this manufacturer ?')) {
      this.manufacturerService.delete(this.manufacturer.id).subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['manufacturer']);
        },
        error: error => {
          console.log('Some error happened');
          console.error(error);
        },
      });
    }
  }

  public goBack() {
    this.router.navigate(['manufacturer']);
  }
}
