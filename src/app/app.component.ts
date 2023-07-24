import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BoardComponent} from "./components/board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Random posts';
}
