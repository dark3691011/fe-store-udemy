import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private data = new BehaviorSubject<any>('');
  currentData = this.data.asObservable();
  timeout?: any;

  updateData(newData: any) {
    clearTimeout(this.timeout);
    this.data.next(newData);
    this.timeout = setTimeout(() => this.data.next(''), 1000);
  }
}
