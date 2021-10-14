import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { Income } from 'src/app/models/income.models';
import { IExpense } from 'src/app/services/expense.service';
import { IIncome } from 'src/app/services/income.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

  incomesList:Income[]=[];
  expensesList:Expense[]=[];
  

  constructor(private incomeService:IIncome,private expenseService:IExpense ) {
    expenseService.setExpenseLocal();
    incomeService.setIncomesLocal("desde constructor list"); 
    
   }

  ngOnInit(): void {
    this.incomesList = this.incomeService.incomes;
    this.expensesList = this.expenseService.expense;
  }
  
  
  getPercentage(expense:number):number{
    return expense/this.expenseService.getTotalExpensesValue();
  }

  deleteIncome(income:Income){
      this.incomeService.setIncomesLocal("desde delet list")
      this.incomeService.deleteIncome(income);
      /* this.incomeService.setIncomesLocal(); */
  }
  deleteExpense(expense:Expense){
      this.expenseService.deleteExpense(expense);
  }

  render(){
    this.expenseService.setExpenseLocal();
    this.incomeService.setIncomesLocal("desde constructor list"); 
    this.incomesList = this.incomeService.incomes;
    this.expensesList = this.expenseService.expense;
   }
  }

