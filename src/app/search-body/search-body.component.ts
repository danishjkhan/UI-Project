import { Component, OnInit } from '@angular/core';
import { Response } from '../model/SearchResponse';
import { Datum } from '../model/SearchResponse';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css']
})
export class SearchBodyComponent implements OnInit {

  dataArray : Array<Datum>;

  constructor(private dataService:DataService) { 
    this.dataService.currentMessage.subscribe(resultArray => this.dataArray = resultArray);
  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(resultArray => this.dataArray = resultArray);
  }

}
