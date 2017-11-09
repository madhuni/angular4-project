import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnInit {

  constructor() { }

  public contents: any[] = [{
    imgLink: 'http://www.emwcenter.com/wp-content/uploads/Online-articles.jpg',
    mediaLink: '/media',
    heading: 'Sample Text for the head line text',
    date: 'May 2014',
    publisher: 'YourStory'
  }, {
    imgLink: 'https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/NgZHitNrQkqNOedVqpbl_EditorNote.jpg',
    mediaLink: '/media',
    heading: 'Sample Text for the head line text',
    date: 'May 2014',
    publisher: 'YourStory'
  }, {
    imgLink: 'http://www.radio.gov.pk/digital_images/large/2017-01-20/top-news-stories-and-editorials-from-national-newspapers-1484914847-3271.jpg',
    mediaLink: '/media',
    heading: 'Sample Text for the head line text',
    date: 'May 2014',
    publisher: 'YourStory'
  }];

  ngOnInit() {
  }

}
