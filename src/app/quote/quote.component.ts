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
  deleteQuote(isComplete, index){
    this.quotes.splice(index, 1);
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength +1;
    this.quotes.push(quote)

  }
  upvote(i){
    this.quotes[i].upvotes ++;
  }
  downvote(i){
    this.quotes[i].downvotes ++;
  }
  high:number
  low:number
  counter:number

  highestUpvote(){
    this.high=0
    this.low=0

    for(this.counter=0; this.counter<this.quotes.length; this.counter++){
      this.low = this.quotes[this.counter].upvotes;
      if(this.low> this.high){this.high=this.low}
    }
    return this.high
  }

  constructor() { }

  ngOnInit() {
  }

}
