import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Manufacturer } from '../../interfaces/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manufacturer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-manufacturer.component.html',
  styleUrl: './add-manufacturer.component.css',
})
export class AddManufacturerComponent implements OnInit {
  public manufacturerForm!: FormGroup;
  public manufacturer: Manufacturer[] = [];
  public reviewStates: string[] = [];

  constructor(
    public manufacturerService: ManufacturerService,
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with form controls and validators
    this.manufacturerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      address: ['', [Validators.required]],
      headquarterCountryCode: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{2}$/)]],
      category: ['', [Validators.required]],
      catalogSize: ['', [Validators.required]],
      reviewState: ['', [Validators.required]],
      aliases: this.formBuilder.array([this.createAliasControl()], [Validators.required]),
    });

    // Populate reviewStates array with available review states from the service
    this.reviewStates = this.manufacturerService.availableReviewStates;
  }

  // Method to handle form submission
  onSubmit() {
    this.manufacturerService.post(this.manufacturerForm.value).subscribe({
      next: () => {
        // Navigate to manufacturer page after successful form submission
        this.router.navigate(['manufacturer']);
      },
      error: error => {
        console.error(error);
      },
    });
  }

  // Getter method to access form controls
  get form() {
    return this.manufacturerForm.controls;
  }

  // Getter method to access alias form array
  get aliases() {
    return this.manufacturerForm.get('aliases') as FormArray;
  }

  // Method to create a new alias form control
  createAliasControl(): FormGroup {
    return this.formBuilder.group({
      alias: ['', Validators.required],
    });
  }

  // Method to add a new alias control to the form array
  addAlias() {
    this.aliases.push(this.createAliasControl());
  }

  // Method to reset the form
  resetForm() {
    this.manufacturerForm.reset();
  }

  // Method to navigate back to the manufacturer page
  public goBack() {
    this.router.navigate(['manufacturer']);
  }
}
