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
    isMediaPlayble: true,
    date: 'August 2016',
    publisher: 'YouTube'
  }, {
    imgLink: 'assets/images/media.component.images/your-story.jpg',
    mediaLink: 'https://yourstory.com/2015/09/ethereal-machines/',
    heading: '63 rejections to break even',
    btnTitle: 'Learn More',
    isMediaPlayble: false,
    date: 'September 2015',
    publisher: 'YOURSTORY'
  }, {
    imgLink: 'assets/images/media.component.images/press-release.jpg',
    mediaLink: 'https://youtu.be/yi4Qocbq2n4',
    btnTitle: 'Play',
    isMediaPlayble: false,
    heading: 'TEDxYouth',
    date: 'January 2016',
    publisher: 'TEDx Talks'
  }];

  public isModalOpen: boolean = false;

  openModal() {
    console.log('openModal function is called');
    this.isModalOpen = true;
    console.log(this.isModalOpen);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {
  }

}
