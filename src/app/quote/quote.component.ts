import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote('Emily','EDL','When you can’t find the sunshine, be the sunshine'),
    new Quote('Justine', 'Jordyn Woods', 'I dont want your situation')
  ]

  constructor() { }

  ngOnInit() {
  }

}
