import { Component,  OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Income } from 'src/app/models/income.models';
import { IExpense } from 'src/app/services/expense.service';
import { IIncome } from 'src/app/services/income.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

  incomesList:Income[];
  expensesList:Expense[];
  

  constructor(public incomeService:IIncome,public expenseService:IExpense ) {
  
   }

  ngOnInit(){
    this.incomesList = this.incomeService.setIncomesLocal(); 
    
    this.expensesList = this.expenseService.setExpenseLocal();
  }
  
  
  getPercentage(expense:number):number{
    return expense/this.expenseService.getTotalExpensesValue();
  }

  deleteIncome(income:number){
      this.incomeService.deleteIncome(income);  
  }


  deleteExpense(expense:number){
      this.expenseService.deleteExpense(expense);
  }

 
  }

