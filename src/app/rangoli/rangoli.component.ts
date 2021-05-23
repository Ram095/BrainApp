import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-rangoli',
  templateUrl: './rangoli.component.html',
  styleUrls: ['./rangoli.component.scss']
})
export class RangoliComponent implements OnInit {
  title = 'rangoli';

  correctChoice = false;

  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  imageList = [];

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
    this.fetchData(this.title);
  }

  fetchData(title): void {
    this.dataLayer.getData().subscribe((res) => {
      this.imageList = res[title];
    })
  }

  back() {
    if(this.index === 0){
      return
    }
    this.index -= 1;
  }

  next() {
    if((this.imageList.length - 1) == this.index){
      return
    }
    this.index += 1;
  }
}
