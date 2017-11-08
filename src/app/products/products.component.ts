import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {

  @Input()
  isHalo: boolean;

  @Input()
  isPentagram: boolean;

  @Input()
  isEstrella: boolean;

  @Input()
  products: any[] = [];

  @Input()
  noAbout: boolean;

  @Input()
  noFeature: boolean;

  @Input()
  noTechSpecs: boolean;

}
