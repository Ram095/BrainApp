import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  title = 'places';

  correctChoice = false;

  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  //imageList = [];

  imageList = [
  {
      name: '1', url : './assets/currency/1.jpeg', options: [{ name: '200'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '2', url : './assets/currency/2.jpeg', options: [{ name: '2'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '5', url : './assets/currency/5.jpeg', options: [{ name: '200'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '10', url : './assets/currency/10.png', options: [{ name: '10'}, { name: '50'}, { name: '100'}]
  },
  {
    name: '100', url : './assets/currency/100.png', options: [{ name: '200'}, { name: '100'}, { name: '500'}]
  },
  {
    name: '200', url : './assets/currency/200.png', options: [{ name: '20'}, { name: '10'}, { name: '200'}]
  },
  {
    name: '50', url : './assets/currency/50.png', options: [{ name: '50'}, { name: '100'}, { name: '2000'}]
  },
  {
    name: '2000', url : './assets/currency/2000.jpeg', options: [{ name: '2000'}, { name: '10'}, { name: '200'}]
  },
  {
    name: '20', url : './assets/currency/20.png', options: [{ name: '200'}, { name: '20'}, { name: '500'}]
  }]

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
    this.fetchData(this.title);
  }

  fetchData(title): void {
    // this.dataLayer.getData().subscribe((res) => {
    //   this.imageList = res[title];
    // })
  }

  submit(name) {
    if (name.toLowerCase() === (this.imageList[this.index].name).toLowerCase()) {
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
