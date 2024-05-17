import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum AlertEnum {
  SUCCESS = 1,
  DANGER = 2,
}

class AlertType {
  type!: AlertEnum;
  message!: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private data = new BehaviorSubject<any>('');
  currentData = this.data.asObservable();
  timeout?: any;

  updateData(newData: AlertType) {
    clearTimeout(this.timeout);
    this.data.next(newData);
    this.timeout = setTimeout(() => this.data.next(''), 1000);
  }
}
