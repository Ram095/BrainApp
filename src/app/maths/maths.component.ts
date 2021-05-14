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

  imageList = [
    {
      result: '2', x: '1', y: '1', operation: '+', options: [{ result: '3' }, { result: '4' }, { result: '2' }]
    },
    {
      result: '3', x: '1', y: '2', operation: '+', options: [{ result: '4' }, { result: '3' }, { result: '1' }]
    },
    {
      result: '4', x: '2', y: '2', operation: '+', options: [{ result: '5' }, { result: '4' }, { result: '2' }]
    },
    {
      result: '6', x: '3', y: '3', operation: '+', options: [{ result: '1' }, { result: '2' }, { result: '6' }]
    },
    {
      result: '5', x: '3', y: '2', operation: '+', options: [{ result: '5' }, { result: '3' }, { result: '1' }]
    },
    {
      result: '2', x: '4', y: '2', operation: '-', options: [{ result: '2' }, { result: '5' }, { result: '6' }]
    },
    {
      result: '2', x: '3', y: '1', operation: '-', options: [{ result: '4' }, { result: '2' }, { result: '1' }]
    },
    {
      result: '1', x: '2', y: '1', operation: '-', options: [{ result: '2' }, { result: '1' }, { result: '3' }]
    },
    {
      result: '8', x: '4', y: '4', operation: '+', options: [{ result: '8' }, { result: '1' }, { result: '3' }]
    },
    {
      result: '10', x: '5', y: '5', operation: '+', options: [{ result: '3' }, { result: '6' }, { result: '10' }]
    },
    {
      result: '20', x: '10', y: '10', operation: '+', options: [{ result: '20' }, { result: '5' }, { result: '30' }]
    }
  ];

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
    if (place.toLowerCase() === (this.imageList[this.index].result).toLowerCase()) {
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
