import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Datum } from '../model/SearchResponse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultArray :  any[];
  messageSource = new BehaviorSubject<Array<Datum>>(this.defaultArray);
  currentMessage = this.messageSource.asObservable();

  changeMessage(messageArray : Array<Datum>) {
    this.messageSource.next(messageArray);
  }

  constructor() { }
}
