import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.scss']
})
export class MathsComponent implements OnInit {
  title = 'maths';

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

  submit(place) {
    debugger;
    if (place === (this.imageList[this.index].result)) {
      this.correctCount += 1;
      this.correctChoice = true;
      setTimeout(() => {
        this.correctChoice = false;
        if((this.imageList.length - 1) == this.index){
          this.completedTest = true;
          return;
        }
        this.index += 1;
      },2000)
    } else {
      this.incorrectCount += 1;
    }
  }

  restartTest(): void {
    this.index = 0;
    this.correctCount= 0;
    this.incorrectCount= 0;
    this.completedTest = false;
  }

}
