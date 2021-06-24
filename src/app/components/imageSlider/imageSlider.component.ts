import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html'
})

export class ImageSliderComponent implements OnInit, AfterViewInit {


  @ViewChild('slickModal', { static: false }) slickModalRef: any; // variable to access slider element
  @Input('sliderFor') sliderFor: string = ''; // an input variable to customize the slider images

  readonly imageRootPath = "assets/images/sliderImages/";
  readonly homePageMainImagesPath = "homePageMainImages/";
  readonly homePageResultImagesPath = "homePageResultImages/";
  slideImages: any = [];  // array for showing slides on slider 


  neetImage = this.imageRootPath + 'NEET.jpg';
  iitImage = this.imageRootPath + 'IITJEE.jpg';

  // config variable for slider
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true
  };

  sliderFor_HomePageMainSlider = "HomePageMainSlider".toUpperCase();
  sliderFor_HomePageResultSlider = "HomePageResultSlider".toUpperCase();

  ngOnInit() {
    // this will automatic play the slider
    if (this.sliderFor !== '') {
      this.sliderFor = this.sliderFor.toUpperCase();
      // this will automatic play the slider
      this.slideImages = this.getImageFeeds(this.sliderFor);
    }
  }

  ngAfterViewInit() {
    if (this.slickModalRef != undefined) {
      this.slickModalRef.slickPlay();
    }
  }

  /**
   * 
   * @param sliderFor Pass the value which is got by home page
   * @returns Method returns the imageFeeds as per passed parameters
   */
  private getImageFeeds(sliderFor: string) {
    let imageFeeds = new Set();
    switch (sliderFor) {


      case this.sliderFor_HomePageMainSlider:
        imageFeeds = this.prepareImagePathObject(this.homePageMainImagesPath, 4, 'slide');
        break;

      case this.sliderFor_HomePageResultSlider:
        imageFeeds = this.prepareImagePathObject(this.homePageResultImagesPath, 6, 'studentName');

        // changing the config values to show more images
        this.slideConfig.slidesToShow = 4;
        this.slideConfig.slidesToScroll = 2;
        break;


    }


    return imageFeeds;

  }

  /**
   * below method will prepare the image path as per passed parameters
   * @param folderPath  Pass Folder name on which the images are stored
   * @param imagesCount Pass the total image counts
   * @param imageNamePrefix Pass Image naming convention like slide, studentName etc.
   */
  private prepareImagePathObject(folderPath: string, imagesCount: number, imageNamePrefix: string, imageExtension = '.jpg') {

    var imagesSet = new Set();
    let currentImagePath = '';
    for (let i = 1; i <= imagesCount; i++) {
      currentImagePath = this.imageRootPath + folderPath + imageNamePrefix + i.toString() + imageExtension;
      imagesSet.add({ image: currentImagePath });
    }

    return imagesSet;
  }

}