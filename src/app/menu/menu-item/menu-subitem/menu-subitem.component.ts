import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-subitem',
  templateUrl: './menu-subitem.component.html',
  styleUrls: ['./menu-subitem.component.sass'],
})
export class MenuSubitemComponent implements OnInit {
  @Input() node;
  constructor() { }

  ngOnInit() {
  }

}
