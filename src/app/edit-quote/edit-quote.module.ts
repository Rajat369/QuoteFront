
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditQuoteRoutingModule } from './edit-quote-routing.module';
import { EditQuoteComponent } from './edit-quote.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [EditQuoteComponent],
  imports: [
    CommonModule,
    EditQuoteRoutingModule,
    MaterialModule,
    FormsModule,
    MatInputModule
  ]
})
export class EditQuoteModule { 

}
