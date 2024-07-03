import { AddManufacturerComponent } from './pages/add-manufacturer/add-manufacturer.component';
import { BadRequestComponent } from './pages/bad-request/bad-request.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { ManufacturerDetailsComponent } from './pages/manufacturer-details/manufacturer-details.component';
import { ManufacturersComponent } from './pages/manufacturers/manufacturers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'manufacturer',
    pathMatch: 'full',
  },
  {
    path: 'manufacturer',
    title: 'Manufacturers',
    component: ManufacturersComponent,
  },
  {
    path: 'manufacturer/bad-request',
    title: 'Bad Request',
    component: BadRequestComponent,
  },
  {
    path: 'manufacturer/page-not-found',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
  },
  {
    path: 'manufacturer/internal-server-error',
    title: 'Internal Server Error',
    component: InternalServerErrorComponent,
  },
  {
    path: 'manufacturer/add',
    title: 'Add Manufacturer',
    component: AddManufacturerComponent,
  },
  {
    path: 'manufacturer/:id',
    title: 'Manufaturer Details',
    component: ManufacturerDetailsComponent,
  },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
