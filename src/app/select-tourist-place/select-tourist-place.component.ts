import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-select-tourist-place',
  templateUrl: './select-tourist-place.component.html',
  styleUrls: ['./select-tourist-place.component.scss']
})
export class SelectTouristPlaceComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  imageList = [
    {
      name: 'Mysore Palace',
      url: './assets/IMG_20191214_130421.jpg',
      options: [
        {
          place: 'Mysore Palace'
        },
        {
          place: 'Iskon Temple'
        },
        {
          place: 'Pamban Bridge'
        }
      ]
    },
    {
      name: 'Thanjavur Temple',
      url: './assets/IMG-20191101-WA0041.jpg',
      options: [
        {
          place: 'Iskon Temple'
        },
        {
          place: 'Thanjavur Temple'
        }
      ]
    },
    {
      name: 'Srinagar',
      url: './assets/Srinagar2.jpeg',
      options: [
        {
          place: 'Thanjavur Temple'
        },
        {
          place: 'Srinagar'
        },
        {
          place: 'Kota, Rajasthan'
        }
      ]
    },
    {
      name: 'Yelagiri Temple',
      url: './assets/IMG_20200117_173138.jpg',
      options: [
        {
          place: 'Mysore Palace'
        },
        {
          place: 'Rameshwaram Temple'
        },
        {
          place: 'Yelagiri Temple'
        }
      ]
    },
    {
      name: 'Golden Temple',
      url: './assets/goldenTemple.jpeg',
      options: [
        {
          place: 'Mysore Palace'
        },
        {
          place: 'Golden Temple'
        },
        {
          place: 'Yelagiri Temple'
        }
      ]
    },
    {
      name: 'Taj hotel',
      url: './assets/tajHotelMumbai.jpeg',
      options: [
        {
          place: 'Mysore Palace'
        },
        {
          place: 'Golden Temple'
        },
        {
          place: 'Taj hotel'
        }
      ]
    },
    {
      name: 'Amritsar',
      url: './assets/jaliawalaBagh.jpeg',
      options: [
        {
          place: 'Mysore Palace'
        },
        {
          place: 'Amritsar'
        },
        {
          place: 'Iskon Temple'
        }
      ]
    },
    {
      name: 'Mumbai',
      url: './assets/gatewayOfIndia.jpeg',
      options: [
        {
          place: 'Mumbai'
        },
        {
          place: 'Golden Temple'
        },
        {
          place: 'Iskon Temple'
        }
      ]
    },
    {
      name: 'Srinagar',
      url: './assets/Srinagar.jpeg',
      options: [
        {
          place: 'Thanjavur Temple'
        },
        {
          place: 'Srinagar'
        },
        {
          place: 'Kota, Rajasthan'
        }
      ]
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(place) {
    if (place.toLowerCase() === (this.imageList[this.index].name).toLowerCase()) {
      this.correctCount += 1;
    } else {
      this.incorrectCount += 1;
    }

    if((this.imageList.length - 1) == this.index){
      this.completedTest = true;
      return;
    }

    this.index += 1;
  }

  restartTest(): void {
    this.index = 0;
    this.correctCount= 0;
    this.incorrectCount= 0;
    this.completedTest = false;
  }

}
