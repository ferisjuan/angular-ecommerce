import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MenuItemComponent } from 'src/app/menu/menu-item/menu-item.component';
import { MenuSubitemComponent } from './menu/menu-item/menu-subitem/menu-subitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductsComponent,
    CartComponent,
    MenuItemComponent,
    MenuSubitemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
