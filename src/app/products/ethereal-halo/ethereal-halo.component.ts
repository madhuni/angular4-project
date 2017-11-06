import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-halo',
  templateUrl: './ethereal-halo.component.html'
})
export class EtherealHaloComponent implements OnInit {

  constructor() { }

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/halo-images/halo-first-frame.png',
      productVideoSrc: 'assets/videos/products.component.videos/halo-videos/halo-video.mp4',
      productName: 'The Ethereal Halo',
      productTagLine: 'World\'s First Desktop Simultaneous 5 Axis Addative and Substractive machine'
    },
    about: {
      productName: 'The Ethereal halo',
      details: [],
      pictures: {
        defaultImage: 'assets/images/products.component.images/halo-images/halo--small.svg',
        smallSizeImage: 'assets/images/products.component.images/halo-images/halo--small.svg',
        mediumSizeImage: 'assets/images/products.component.images/halo-images/halo--medium.svg',
        largeSizeImage: 'assets/images/products.component.images/halo-images/halo--large.svg',
        largerSizeImage: 'assets/images/products.component.images/halo-images/halo--larger.svg'
      }
    },
    features: [{
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'No Features Yet',
      featureDetail: 'Features yet to be defined.'
    }],
    techSpecs: []
  }];

  ngOnInit() {
  }

}
