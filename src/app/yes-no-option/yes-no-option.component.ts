import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-yes-no-option',
  templateUrl: './yes-no-option.component.html',
  styleUrls: ['./yes-no-option.component.scss']
})
export class YesNoOptionComponent implements OnInit {
  completedTest = false;

  faChevronLeft = faChevronLeft;

  index=0;

  imageList = [
    { name: 'elephant', url: 'https://images.theconversation.com/files/389590/original/file-20210315-15-1n9g1j6.jpg', answer: true },
    { name: 'giraffe', url: 'https://aniportalimages.s3.amazonaws.com/media/details/animals_11_nSjPC6b.jpg', answer: false },
    { name: 'rabbit', url: 'https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg', answer: true  },
    { name: 'dog', url: 'https://petsymptoms.com/wp-content/uploads/2017/06/golden-retriever-wagging-tail-Dog-Tail-ss-FEATURE.jpg', answer: true },
    { name: 'goat', url: 'https://metro.co.uk/wp-content/uploads/2018/05/sei_14589401.jpg?quality=90&strip=all', answer: false},
    { name: 'monkey', url: 'https://s-media-cache-ak0.pinimg.com/736x/8f/0e/c5/8f0ec5565850f27bf8568c32b8a5f23f.jpg', answer: true},
    { name: 'rhino', url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/najin-and-her-offspring-fatu-two-female-northern-white-news-photo-1607463656.?crop=1xw:1xh;center,top&resize=480:*', answer: true},
    { name: 'tiger', url: 'https://www.gannett-cdn.com/-mm-/116eb12287558f9884b0e58dead79620a45394d9/c=0-0-3000-1692/local/-/media/USATODAY/USATODAY/2014/05/27//1401219246000-Axx-tiger-V2-22.jpg', answer: true},
    { name: 'camel', url: 'https://www.oneindia.com/img/2017/04/cow2-24-1493030350.jpg', answer: false},
    { name: 'horse', url: 'https://www.treehugger.com/thmb/4POnzxta535OuxqNIRBWCUzK39M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg', answer: true},
    { name: 'camel', url: 'http://www.todayifoundout.com/wp-content/uploads/2010/07/Copy-of-Arabian-Camel-800x600.jpg', answer: true},
    { name: 'sheep', url: 'https://spcabc.b-cdn.net/wp-content/uploads/lamb-in-grassy-field-825x550.jpg', answer: true},
    { name: 'lion', url: 'https://www.thehindubusinessline.com/news/variety/z9plsb/article30390447.ece/ALTERNATES/LANDSCAPE_615/bl25Goatspix', answer: false}
  ]

  correctCount= 0;

  incorrectCount= 0;

  constructor() { }

  ngOnInit(): void {
  }

  submit(answer): void{
    if(this.imageList[this.index].answer === answer) {
      this.correctCount += 1;
    }
    else{
      this.incorrectCount +=1;
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
