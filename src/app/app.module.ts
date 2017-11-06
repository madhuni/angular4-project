import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';
import { EtherealHaloComponent } from './products/ethereal-halo/ethereal-halo.component';
import { EtherealPentagramComponent } from './products/ethereal-pentagram/ethereal-pentagram.component';
import { EtherealEstrellaComponent } from './products/ethereal-estrella/ethereal-estrella.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/halo', component: EtherealHaloComponent },
  { path: 'products/pentagram', component: EtherealPentagramComponent },
  { path: 'products/estrella', component: EtherealEstrellaComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'company', component: CompanyComponent }
];
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
    EtherealEstrellaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
