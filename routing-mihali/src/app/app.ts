import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Animals } from './animals/animals';
import { Fruits } from './fruits/fruits';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Animals,Fruits,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-name');
}
