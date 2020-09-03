import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../model/SearchResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }


  getSearchResults(query : String)
  {
    console.log('Finally calling getSerach result of' +query);
    return this.httpClient.get<Response>('https://api.giphy.com/v1/gifs/search?api_key=kGtSte5gG53sovDAFaySwy3ojAKjITxv&q='+query+'&limit=25&offset=0&rating=r&lang=en');
  }

}
