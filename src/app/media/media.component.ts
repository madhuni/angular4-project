import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {

  constructor() { }

  public contents: any[] = [{
    imgLink: 'assets/images/media.component.images/documentry.jpg',
    mediaLink: 'https://youtu.be/6dun2zbYJmc',
    heading: 'Documentary by Govt.of India',
    btnTitle: 'Play',
    date: 'August 2016',
    publisher: 'YouTube'
  }, {
      imgLink: 'assets/images/media.component.images/your-story.jpg',
    mediaLink: 'https://yourstory.com/2015/09/ethereal-machines/',
    heading: '63 rejections to break even',
    btnTitle: 'Learn More',
    date: 'September 2015',
    publisher: 'YOURSTORY'
  }, {
      imgLink: 'assets/images/media.component.images/press-release.jpg',
    mediaLink: 'https://youtu.be/yi4Qocbq2n4',
    btnTitle: 'Play',
    heading: 'TEDxYouth',
    date: 'January 2016',
    publisher: 'TEDx Talks'
  }];

  ngOnInit() {
  }

}
