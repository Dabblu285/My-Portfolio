import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

 }
