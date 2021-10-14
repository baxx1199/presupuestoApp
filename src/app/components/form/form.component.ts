import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Income } from 'src/app/models/income.models';
import { IExpense } from 'src/app/services/expense.service';
import { IIncome } from 'src/app/services/income.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  typeBudget:string = 'income';
  descriptionIn:string;
  valueIn:number ;

  constructor(private incomeService:IIncome,private expenseService:IExpense) { 
    
  }

  ngOnInit(): void {
  }
  
  setTypeOp(event:any){
      this.typeBudget=event.target.value;
  }
  addBudget(){
    console.log(this.typeBudget)
      if(this.typeBudget==='income'){
        this.incomeService.addNewIncome(this.descriptionIn,this.valueIn);
      }else{
        this.expenseService.addNewExpense(this.descriptionIn,this.valueIn);
      } 
  }
  

}
