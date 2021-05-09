import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showTopicsList = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const showParam = params.get('show') || '';
      if(showParam == 'list') {
        this.showTopicsList = true
      }
    })
  }

  showTopics(): void {
    this.showTopicsList = true;
  }

}
