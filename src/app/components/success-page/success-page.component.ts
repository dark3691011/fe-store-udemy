import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.css',
})
export class SuccessPageComponent {
  @Input() name?: string;
  @Input() total?: number;
}
