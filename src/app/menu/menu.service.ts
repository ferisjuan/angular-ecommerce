import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  selectedItemsId = new BehaviorSubject(0);
  constructor() {}

  onItemSelected(id: number) {
    this.selectedItemsId.next(id);
  }
}
