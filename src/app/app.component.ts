import { Component, OnInit } from '@angular/core';

import { FetchDataService } from './services/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public dataInfo: any;
  public filterPost = '';

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    this.getJovenData();
  }

  private getJovenData() {
    this.fetchDataService.getData().subscribe((res: any) => {
      this.dataInfo = res;
    });
  }
}
