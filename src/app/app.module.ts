import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';
import { EtherealHaloComponent } from './products/ethereal-halo/ethereal-halo.component';
import { EtherealPentagramComponent } from './products/ethereal-pentagram/ethereal-pentagram.component';
import { EtherealEstrellaComponent } from './products/ethereal-estrella/ethereal-estrella.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CompanyComponent,
    ProductsComponent,
    EtherealHaloComponent,
    EtherealPentagramComponent,
    EtherealEstrellaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
