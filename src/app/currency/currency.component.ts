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
      name: '1', url : 'https://en.numista.com/catalogue/photos/inde/3180-original.jpg', options: [{ name: '200'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '2', url : 'https://en.numista.com/catalogue/photos/inde/3205-original.jpg', options: [{ name: '2'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '5', url : 'https://en.numista.com/catalogue/photos/inde/3070-original.jpg', options: [{ name: '200'}, { name: '1'}, { name: '5'}]
  },
  {
    name: '10', url : 'https://paisaboltahai.rbi.org.in/images/Rs10/10-note-front.png', options: [{ name: '10'}, { name: '50'}, { name: '100'}]
  },
  {
    name: '100', url : 'https://www.bidcurios.com/wp-content/uploads/2021/01/IMG_20210111_0037.jpg', options: [{ name: '200'}, { name: '100'}, { name: '500'}]
  },
  {
    name: '200', url : 'https://paisaboltahai.rbi.org.in/images/Rs200/200-note-front-ho.png', options: [{ name: '20'}, { name: '10'}, { name: '200'}]
  },
  {
    name: '50', url : 'https://upload.wikimedia.org/wikipedia/commons/3/3f/India_new_50_INR%2C_MG_series%2C_2018%2C_obverse.jpg', options: [{ name: '50'}, { name: '100'}, { name: '2000'}]
  },
  {
    name: '2000', url : 'https://miro.medium.com/max/5596/1*wftM0F6R5avdeJ84mBURaA.jpeg', options: [{ name: '2000'}, { name: '10'}, { name: '200'}]
  },
  {
    name: '20', url : 'https://www.collectorbazar.com/images/products/20-rs-super-fancy-number-666666-gem-unc-note-115442-1.jpeg', options: [{ name: '200'}, { name: '20'}, { name: '500'}]
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
