import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DataLayerService } from 'src/services/data-layer.service';

@Component({
  selector: 'app-sound-identify',
  templateUrl: './sound-identify.component.html',
  styleUrls: ['./sound-identify.component.scss']
})
export class SoundIdentifyComponent implements OnInit {
  title = 'sound';

  correctChoice = false;

  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  imageList = [
    {
      name: 'Cat', url: './assets/sounds/Meow.ogg', options: [{ name: 'Cat', photo: './assets/animals/cat.jpeg'}, { name: 'Dog', photo: './assets/animals/dog.jpeg'}, { name: 'Elephant', photo: './assets/animals/elephant.jpeg'}]
    },
    { name: 'Dog', url: './assets/sounds/Barking_of_a_dog.ogg', options: [ { name: 'Cat', photo: './assets/animals/cat.jpeg'}, { name: 'Lion', photo: './assets/animals/lion.jpeg'},{ name: 'Dog', photo: './assets/animals/dog.jpeg'}]
    },
    { name: 'Goat', url: './assets/sounds/Herd_of_goats_bleating.ogg', options: [{ name: 'Goat', photo: './assets/animals/goat.png'}, { name: 'Dog', photo: './assets/animals/dog.jpeg'}, { name: 'Elephant', photo: './assets/animals/elephant.jpeg'}]
    },
    { name: 'Lion', url: './assets/sounds/Lion.ogg', options: [{ name: 'Cat', photo: './assets/animals/cat.jpeg'},{ name: 'Lion', photo: './assets/animals/lion.jpeg'}, { name: 'Monkey', photo: './assets/animals/monkey.jpeg'}]
    },
    { name: 'Crow', url: './assets/sounds/BlackCrow.ogg', options: [{ name: 'Cat', photo: './assets/animals/cat.jpeg'}, { name: 'Crow', photo: './assets/animals/crow.jpeg'}, { name: 'Elephant', photo: './assets/animals/elephant.jpeg'}]
    },
    { name: 'Elephant', url: './assets/sounds/elephant.mp3', options: [{ name: 'Elephant', photo: './assets/animals/elephant.jpeg'}, { name: 'Goat', photo: './assets/animals/goat.png'}, { name: 'Lion', photo: './assets/animals/lion.jpeg'}]
    },
    { name: 'Tiger', url: './assets/sounds/Tiger.mp3', options: [ { name: 'Cat', photo: './assets/animals/cat.jpeg'}, { name: 'Tiger', photo: './assets/animals/tiger.jpeg'},{ name: 'Dog', photo: './assets/animals/dog.jpeg'}]
    },
    { name: 'Monkey', url: './assets/sounds/Monkey.mp3', options: [{ name: 'Cat', photo: './assets/animals/cat.jpeg'},{ name: 'Lion', photo: './assets/animals/lion.jpeg'}, { name: 'Monkey', photo: './assets/animals/monkey.jpeg'}]
    },
  ]

  constructor(private dataLayer : DataLayerService) { }

  ngOnInit(): void {
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
      document.getElementById("my-audio").setAttribute('src', this.imageList[(this.index + 1)].url);
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
