import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manufacturer } from '../interfaces/manufacturer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

// Base URL for the API
const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  public availableReviewStates: string[] = ['none', 'todo', 'done'];

  constructor(private http: HttpClient) {}

  // Method to get all manufacturers
  public getAll(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(BASE_URL);
  }

  // Method to get a specific manufacturer by ID
  public get(id: number): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(`${BASE_URL}/${id}`);
  }

  // Method to add a new manufacturer
  public post(manufacturer: Manufacturer) {
    return this.http.post(BASE_URL, manufacturer);
  }

  // Method to update an existing manufacturer by ID
  public patch(id: number, manufacturer: Manufacturer): Observable<Manufacturer> {
    return this.http.patch<Manufacturer>(`${BASE_URL}/${id}`, manufacturer);
  }

  // Method to delete a manufacturer by ID
  public delete(id: number): Observable<Manufacturer> {
    return this.http.delete<Manufacturer>(`${BASE_URL}/${id}`);
  }

  // Method to find manufacturers by their review state
  public findByReviewState(reviewState: string): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(`${BASE_URL}?reviewState=${reviewState}`);
  }
}
