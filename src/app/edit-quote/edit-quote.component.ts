import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { QuotesService } from './../quotes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {
  id:string; 
  quote ={
   title:'',
   author:''
 }
  constructor(private  quotesService:QuotesService, 
              private activatedRoute:ActivatedRoute, 
              private router:Router,
              private snackBar:MatSnackBar)
               { }

  ngOnInit() {
   this.id= this.activatedRoute.snapshot.paramMap.get('id');
   console.log(this.id);
   if(this.id){
     this.quotesService.getQuote(this.id).subscribe(data=>{
     this.quote=data;
     })
   }
  }
  onSave(form){
    console.log(form);
    const data=form.value;
    if(this.id){
   
    this.quotesService.updateQuote(this.id,data).subscribe(quote=>{
      this.snackBar.open('Quote Updated');
      
    console.log(quote);
    this.router.navigateByUrl('/quotes');
    });
    }
    else{
     
    this.quotesService.createQuote(data).subscribe(quote=>{
      this.snackBar.open('Quote Created');
      console.log(quote);
      this.router.navigateByUrl('/quotes');
    })
  }
  }
}
