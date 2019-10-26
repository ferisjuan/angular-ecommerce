import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu-subitem',
  templateUrl: './menu-subitem.component.html',
  styleUrls: ['./menu-subitem.component.sass'],
})
export class MenuSubitemComponent implements OnInit {
  private selectedItem: number;

  @Input() node;
  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  onItemSelected(id: number) {
    this.menuService.onItemSelected(id);
  }
}
