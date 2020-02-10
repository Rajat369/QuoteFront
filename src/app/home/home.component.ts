import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Quote } from '../quotes/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   quote:Observable<Quote>;
  constructor(private quoteService:QuotesService) { }

  ngOnInit() {
    this.quote= this.quoteService.getQuote('5e3d567d1bbe0f24845864a2');
  }

}
