import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ethereal-pentagram',
  templateUrl: './ethereal-pentagram.component.html'
})
export class EtherealPentagramComponent implements OnInit {

  constructor() { }

  products: any[] = [{
    header: {
      firstFrameImage: 'assets/images/products.component.images/pentagram-images/pentagram-first-frame.png',
      productVideoSrc: 'assets/videos/products.component.videos/pentagram-videos/pentagram-video.mp4',
      productName: 'The Ethereal Pentagram',
      productTagLine: 'World\'s First Desktop Simultaneous 5 Axis CNC Machine'
    },
    about: {
      productName: 'The Ethereal Pentagram',
      details: [
        'The Pentagram has been designed to be the world\'s first desktop simultaneous 5 axis subtractive manufacturing machine. Equipped with the capabilities of machining a plethora of materials, the Pentagram is poised to disrupt the manufacturing industry.',

        'Pentagram has been made keeping in mind both industrial users and amateur users. The Pentagram is a one stop solution for manufacturing smaller moulds, machining wax, etching PCBs, cutting precision parts and creating novelty products. The machine is compatible with a wide range of designing softwares ensuring easy operability of the machine.'
      ],
      pictures: {
        defaultImage: 'assets/images/products.component.images/pentagram-images/pentagram--small.svg',
        smallSizeImage: 'assets/images/products.component.images/pentagram-images/pentagram--small.svg',
        mediumSizeImage: 'assets/images/products.component.images/pentagram-images/pentagram--medium.svg',
        largeSizeImage: 'assets/images/products.component.images/pentagram-images/pentagram--large.svg',
        largerSizeImage: 'assets/images/products.component.images/pentagram-images/pentagram--larger.svg'
      }
    },
    features: [{
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'DESKTOP SIZE',
      featureDetail: 'Designed and engineered to occupy minimal floor space.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: '5-AXIS SIMULTANEOUS KINEMATICS',
      featureDetail: '5 axis simulatneous movement to help reduce machining time.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'HIGH ACCURACY DRIVE MECHANISM',
      featureDetail: 'Achieved through utilization of highly accurately calibrated ball screws and linear guide rails.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'ENCODER FEEDBACK',
      featureDetail: 'Ensures zero by-pass of machining code.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'DEDICATED PC-BASED CONTROLLER',
      featureDetail: 'Real time monitoring and control of the machining job in progress.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'USER FRIENDLY INTERFACE',
      featureDetail: 'Ensures easy operability and aids in quick familiarization with the machine.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'Z PROBE',
      featureDetail: 'Facilitates auto tool height compensation.'
    }, {
      featureImage: 'http://via.placeholder.com/168x168',
      altNameForImage: 'Feature Image',
      featureName: 'MULTIPLE TOOL SUPPORT',
      featureDetail: 'Permits employment of various tools to machine a spectrum of materials.'
    }],
    techSpecs: []
  }];
  
  ngOnInit() {
  }

}
