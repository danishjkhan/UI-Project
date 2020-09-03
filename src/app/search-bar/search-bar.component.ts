import { Component, OnInit } from '@angular/core';
import { Response } from '../model/SearchResponse';
import { Datum } from '../model/SearchResponse';
import { HttpClientService } from '../service/http-client.service';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  result : Response;
  dataArray : Array<Datum>;

 constructor(private httpClientService: HttpClientService, private dataService:DataService){
 }
 
 onSearch(searchValue: string) {
    console.log('Search Text is : '+searchValue);
    this.httpClientService.getSearchResults(searchValue).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
   }
 
   handleSuccessfulResponse(response) {
    console.log("---------------Response-------------------");
    console.log(response);
    this.dataService.changeMessage(response.data);
    console.log("---------------Navigating-------------------");
  };
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(resultArray => this.dataArray = resultArray);
  }
  }