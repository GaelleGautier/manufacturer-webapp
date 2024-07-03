import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Manufacturer } from '../../interfaces/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-manufacturers',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './manufacturers.component.html',
  styleUrl: './manufacturers.component.css',
})
export class ManufacturersComponent implements OnInit {
  public manufacturers: Manufacturer[] = [];
  public reviewStates: string = '';
  public availableReviewStates: string[] = [];
  public currentPage = 1;
  public itemsPerPage = 20;

  constructor(
    public manufacturerService: ManufacturerService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.retrieveManufacturers();
    this.availableReviewStates = this.manufacturerService.availableReviewStates;
    this.route.queryParams.subscribe(params => {
      this.reviewStates = params['reviewState'] || '';
      this.searchReviewState(this.reviewStates);
    });
  }

  retrieveManufacturers(): void {
    this.manufacturerService.getAll().subscribe({
      next: data => {
        this.manufacturers = data;
      },
      error: error => {
        console.error(error);
      },
    });
  }

  searchReviewState(reviewState: string = this.reviewStates): void {
    if (reviewState) {
      this.router.navigate([], { queryParams: { reviewState: reviewState } });
    } else {
      this.router.navigate([]);
    }
    this.manufacturerService.findByReviewState(reviewState).subscribe({
      next: data => {
        this.manufacturers = data;
      },
      error: error => {
        console.error(error);
      },
    });
  }

  get displayedManufacturers(): Manufacturer[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.manufacturers.slice(start, end);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  //Go to add page
  public goToAddPage() {
    this.router.navigate(['manufacturer/add']);
  }

  //Go to details page
  public goToDetails(id: number) {
    this.router.navigate(['manufacturer/', id]);
  }
}
