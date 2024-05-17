import { Component } from '@angular/core';
import { AlertEnum, DataService } from '../../services/data.service';
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
  alertInfo?: any;
  alertEnum = AlertEnum;

  ngOnInit(): void {
    this.dataService.currentData.subscribe((e) => {
      this.alertInfo = e;
    });
  }
}
