import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
  title = 'birthday';

  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  correctChoice = false;

  index=0;

  imageList = [];

  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
    this.fetchData(this.title);
  }

  fetchData(title): void {
    this.dataLayer.getData().subscribe((res) => {
      this.imageList = res[title];
    })
  }

  submit(name) {
    if (name.toLowerCase() === (this.imageList[this.index].birthday).toLowerCase()) {
      this.correctChoice = true;
      this.correctCount += 1;
       setTimeout(() => {
        if((this.imageList.length - 1) == this.index){
          this.completedTest = true;
          return;
        }
        this.correctChoice = false;
        this.index += 1;
        window.scroll(0,0);
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
