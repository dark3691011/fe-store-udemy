import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  constructor(private readonly dataService: DataService) {}
  alertMessage?: string;

  ngOnInit(): void {
    this.dataService.currentData.subscribe((e) => {
      this.alertMessage = e;
    });
  }
}
