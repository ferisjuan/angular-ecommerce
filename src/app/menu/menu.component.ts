import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import categories from './categories/categories';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  isMenuVisible: boolean;
  categories: {};

  constructor(private router: Router) {}

  ngOnInit() {
    this.categories = categories;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        this.isMenuVisible = ev.url === '/products' ? true : false;
      });
  }
}
