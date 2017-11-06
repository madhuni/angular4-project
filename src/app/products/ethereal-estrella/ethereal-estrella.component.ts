import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-estrella',
  templateUrl: './ethereal-estrella.component.html'
})
export class EtherealEstrellaComponent implements OnInit {

  constructor() { }

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/estrella-images/estrella-first-frame.png',
      productVideoSrc: 'assets/videos/products.component.videos/estrella-videos/estrella-video.mp4',
      productName: 'The Ethereal Estrella',
      productTagLine: 'A world class 3D-printer'
    },
    about: {
      productName: 'The Ethereal Estrella',
      details: [],
      pictures: {
        defaultImage: 'assets/images/products.component.images/estrella-images/estrella--small.svg',
        smallSizeImage: 'assets/images/products.component.images/estrella-images/estrella--small.svg',
        mediumSizeImage: 'assets/images/products.component.images/estrella-images/estrella--medium.svg',
        largeSizeImage: 'assets/images/products.component.images/estrella-images/estrella--large.svg',
        largerSizeImage: 'assets/images/products.component.images/estrella-images/estrella--larger.svg'
      }
    },
    features: [{
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'No Features Available',
      featureDetail: 'Features yet to be defined.'
    }],
    techSpecs: []
  }];

  ngOnInit() {
  }

}
