import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MenuItemComponent } from 'src/app/menu/menu-item/menu-item.component';
import { MenuSubitemComponent } from './menu/menu-item/menu-subitem/menu-subitem.component';
import { ProductsControlsComponent } from './products/products-controls/products-controls.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { FilterRangePipe } from './products/filter-range.pipe';
import { FilterAvailablePipe } from './products/filter-available.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductsComponent,
    CartComponent,
    MenuItemComponent,
    MenuSubitemComponent,
    ProductsControlsComponent,
    ProductFormComponent,
    FilterRangePipe,
    FilterAvailablePipe,
      ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
