import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { IExpense } from './services/expense.service';
import { IIncome } from './services/income.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [IExpense,IIncome],
  bootstrap: [AppComponent]
})
export class AppModule { }
