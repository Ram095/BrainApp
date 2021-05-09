import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-yes-no-option',
  templateUrl: './yes-no-option.component.html',
  styleUrls: ['./yes-no-option.component.scss']
})
export class YesNoOptionComponent implements OnInit {
  title = 'animals';

  correctChoice = false;

  completedTest = false;

  faChevronLeft = faChevronLeft;

  index=0;

  imageList = [];

  correctCount= 0;

  incorrectCount= 0;

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
    this.fetchData(this.title);
  }

  fetchData(title): void {
    this.dataLayer.getData().subscribe((res) => {
      this.imageList = res[title];
    })
  }

  submit(answer): void{
    if(this.imageList[this.index].answer === answer) {
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
    }
    else{
      this.incorrectCount +=1;
    }


  }

  restartTest(): void {
    this.index = 0;
    this.correctCount= 0;
    this.incorrectCount= 0;
    this.completedTest = false;
  }

}
