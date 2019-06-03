import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('Emily','EDL','When you can’t find the sunshine, be the sunshine', new Date(2019,6,14)),
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
