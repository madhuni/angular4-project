import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-halo',
  templateUrl: './ethereal-halo.component.html'
})
export class EtherealHaloComponent implements OnInit {

  constructor() { }

  public noFeature: boolean = true;
  public noTechSpecs: boolean = true;
  public noAbout: boolean = true;

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/estrella-images/estrella-first-frame.jpg',
      backgroundImage: 'assets/images/products.component.images/estrella-images/estrella-first-frame.jpg',
      productVideoSrc: 'assets/videos/products.component.videos/halo-videos/halo-video.mp4',
      productName: 'The Ethereal Halo',
      productTagLine: 'World\'s First Desktop Simultaneous 5 Axis Addative and Substractive machine'
    },
    about: {
      productName: 'The Ethereal halo',
      details: [],
      pictures: {}
    },
    features: [],
    techSpecs: []
  }];

  ngOnInit() {
  }

}
