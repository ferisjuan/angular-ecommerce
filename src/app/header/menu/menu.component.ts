import { Component, OnInit } from '@angular/core';

import categories from './categories/categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  public categories: {};

  constructor() {}

  ngOnInit() {
    this.categories = categories;
  }
}
