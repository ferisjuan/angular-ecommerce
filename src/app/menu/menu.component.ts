import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import categories from './categories/categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  public categories: {};

  constructor() {}

  ngOnInit() {
    this.categories = categories;
  }
}
