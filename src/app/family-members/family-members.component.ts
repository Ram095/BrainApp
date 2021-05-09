import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.scss']
})
export class FamilyMembersComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  completedTest = false;

  correctCount = 0;

  incorrectCount = 0;

  index=0;

  imageList = [
    { name: 'Atharva', options: [{
      photo: './assets/family/Adam.jpeg', name: 'Adam'}, { photo: './assets/family/Atharva.jpeg' , name: 'Atharva'}, {photo: './assets/family/Amma.jpeg', name: 'Amma'}, {photo: './assets/family/Selvam.jpeg', name: 'Selvam'}]},
    { name: 'Yazhini', options: [{
      photo: './assets/family/Yazhini.jpeg', name: 'Yazhini'}, { photo: './assets/family/Rakesh.jpeg' , name: 'Rakesh'}, {photo: './assets/family/Gawthami.jpeg', name: 'Gawthami'}, {photo: './assets/family/Selvam.jpeg', name: 'Selvam'}]},
    { name: 'Selvam', options: [{
      photo: './assets/family/Adam.jpeg', name: 'Adam'}, { photo: './assets/family/Rakesh.jpeg' , name: 'Rakesh'}, {photo: './assets/family/Amma.jpeg', name: 'Amma'}, {photo: './assets/family/Selvam.jpeg', name: 'Selvam'}]},
    { name: 'Amrita', options: [{
      photo: './assets/family/Gawthami.jpeg', name: 'Gawthami'}, { photo: './assets/family/Amrita.jpeg' , name: 'Amrita'}, {photo: './assets/family/Siva.jpeg', name: 'Siva'}, {photo: './assets/family/Adam.jpeg', name: 'Adam'}]},
    { name: 'Gawthami', options: [{
      photo: './assets/family/kala.jpeg', name: 'Kala'}, { photo: './assets/family/Mani.jpeg' , name: 'Mani'}, {photo: './assets/family/Gawthami.jpeg', name: 'Gawthami'}, {photo: './assets/family/Prema.jpeg', name: 'Prema'}]},
    { name: 'Mani', options: [{
      photo: './assets/family/Amma.jpeg', name: 'Amma'}, { photo: './assets/family/Siva.jpeg' , name: 'Siva'}, {photo: './assets/family/Cyril.jpeg', name: 'Cyril'}, {photo: './assets/family/Mani.jpeg', name: 'Mani'}]},
    { name: 'Sitaram', options: [{
        photo: './assets/family/Sitaram.jpeg', name: 'Sitaram'}, { photo: './assets/family/Adam.jpeg' , name: 'Adam'}, {photo: './assets/family/Gawthami.jpeg', name: 'Gawthami'}, {photo: './assets/family/Prema.jpeg', name: 'Prema'}]},
    { name: 'Siva', options: [{
      photo: './assets/family/Siva.jpeg', name: 'Siva'}, { photo: './assets/family/Muthukrishnan.jpeg' , name: 'Muthukrishnan'}, {photo: './assets/family/Thukkaram.jpeg', name: 'Thukkaram'}, {photo: './assets/family/Cyril.jpeg', name: 'Cyril'}]},
    { name: 'Muthukrishnan', options: [{
      photo: './assets/family/Amma.jpeg', name: 'Amma'}, { photo: './assets/family/Yazhini.jpeg' , name: 'Yazhini'}, {photo: './assets/family/Muthukrishnan.jpeg', name: 'Muthukrishnan'}, {photo: './assets/family/Adam.jpeg', name: 'Adam'}]},
    { name: 'Amma', options: [{
      photo: './assets/family/Yazhini.jpeg', name: 'Yazhini'}, { photo: './assets/family/Amma.jpeg' , name: 'Amma'}, {photo: './assets/family/Gawthami.jpeg', name: 'Gawthami'}, {photo: './assets/family/Selvam.jpeg', name: 'Selvam'}]},
    { name: 'Adam', options: [{
        photo: './assets/family/Adam.jpeg', name: 'Adam'}, { photo: './assets/family/Muthukrishnan.jpeg' , name: 'Muthukrishnan'}, {photo: './assets/family/Cyril.jpeg', name: 'Cyril'}, {photo: './assets/family/Mani.jpeg', name: 'Mani'}]},
    { name: 'Thukkaram', options: [{
      photo: './assets/family/Thukkaram.jpeg', name: 'Thukkaram'}, { photo: './assets/family/Amrita.jpeg' , name: 'Amrita'}, {photo: './assets/family/Siva.jpeg', name: 'Siva'}, {photo: './assets/family/Adam.jpeg', name: 'Adam'}]},
    { name: 'Rakesh', options: [{
      photo: './assets/family/kala.jpeg', name: 'Kala'}, { photo: './assets/family/Rakesh.jpeg' , name: 'Rakesh'}, {photo: './assets/family/Amma.jpeg', name: 'Amma'}, {photo: './assets/family/Siva.jpeg', name: 'Siva'}]},
    { name: 'Cyril', options: [{
      photo: './assets/family/Adam.jpeg', name: 'Adam'}, { photo: './assets/family/Muthukrishnan.jpeg' , name: 'Muthukrishnan'}, {photo: './assets/family/Cyril.jpeg', name: 'Cyril'}, {photo: './assets/family/Mani.jpeg', name: 'Mani'}]},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  submit(name) {
    if (name.toLowerCase() === (this.imageList[this.index].name).toLowerCase()) {
      this.correctCount += 1;
    } else {
      this.incorrectCount += 1;
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
