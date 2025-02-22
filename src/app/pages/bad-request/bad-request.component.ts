import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bad-request',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bad-request.component.html',
  styleUrl: './bad-request.component.css',
})
export class BadRequestComponent {}
