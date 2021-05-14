import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-shlokas',
  templateUrl: './shlokas.component.html',
  styleUrls: ['./shlokas.component.scss']
})
export class ShlokasComponent implements OnInit {
  title = 'music';

  correctChoice = false;

  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  imageList = [{
    url: 'https://www.youtube.com/embed/ijfLsKg8jFY?start=118', name: 'OM'
  },
  {
    url: 'https://www.youtube.com/embed/HN9r8eLcA_E', name: 'OM'
  },
  {
    url : 'https://www.youtube.com/embed/a_kxY0-LL6Q?start=50', name: 'Hare krishna'
  },
  {
    url: 'https://www.youtube.com/embed/Np28O3Y_P2o?start=50', name: 'Ayigiri Nandini'
  },
  {
    url: 'https://www.youtube.com/embed/t8dydP_M89o', name: 'gayatri mantra'
  },
  {
    url: 'https://www.youtube.com/embed/T7eXrxhlUhU?start=14', name: 'har har shivane'
  }
];

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
    this.fetchData(this.title);
  }

  fetchData(title): void {
    this.dataLayer.getData().subscribe((res) => {
      // this.imageList = res[title];
    })
  }

  back() {
    if(this.index === 0){
      return
    }
    this.index -= 1;
    let music = document.getElementById("shlokas");
    music.setAttribute("src", this.imageList[this.index].url);
  }
  next() {
    if((this.imageList.length - 1) == this.index){
      return
    }
    this.index += 1;
    let music = document.getElementById("shlokas");
    music.setAttribute("src", this.imageList[this.index].url);
  }


}
