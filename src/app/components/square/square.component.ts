import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) title: string = '';

  public displayTitle: boolean = true;

  public toggleTitle(): void {
    this.displayTitle = !this.displayTitle;
  }
}
