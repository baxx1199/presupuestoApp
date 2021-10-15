import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IIncome } from 'src/app/services/income.service';
import { IExpense } from 'src/app/services/expense.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private incomeService:IIncome,private expenseService:IExpense) { 
    
  } 

  ngOnInit(): void { 
    
  }
  
  getIncomes():number {
    return this.incomeService.getTotalIncomesValue();
  }
  getExpenses():number{
    return this.expenseService.getTotalExpensesValue();
  }

  
  getTotalBudget(){
    let totalBudget = this.getIncomes() - this.getExpenses();
    return totalBudget
  }
  percentageExpenses(){
    let percentage = this.getExpenses() / this.getIncomes();
    return percentage;
  }
} 
