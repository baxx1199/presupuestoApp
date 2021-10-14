import { Expense } from "../models/expense.model";

export class IExpense{
    expense:Expense[]=[
        
    ]; 
    
   
    saveInLocaleStorage(){
        
        let extenseJson:string =JSON.stringify(this.expense);
        localStorage.setItem("expense",extenseJson);
        
    }

    

    getOfLocaleStorage():Expense[]{
        let getInfo = localStorage.getItem("expense")!;
        
        return JSON.parse(getInfo);
    }
    setExpenseLocal(){
        const expenseInStorage = this.getOfLocaleStorage();
        this.expense = expenseInStorage;
        
    }

    deleteExpense(expenseD :Expense){
        
        const expenseIndex = this.expense.indexOf(expenseD);
        this.expense.splice(expenseIndex,1);
        this.saveInLocaleStorage();
        this.setExpenseLocal();
        
        
    }
     
    getTotalExpensesValue(){
        let totalExpenses:number=0;
        this.setExpenseLocal();
        this.expense.forEach(expenditure =>{
          totalExpenses += expenditure.value;
        });

        
        return totalExpenses;
    }

    addNewExpense(descriptionNew:string, valueNew:number){
        this.setExpenseLocal();
       this.expense.push( new Expense(descriptionNew,valueNew));
       this.saveInLocaleStorage();
       this.setExpenseLocal();
    }
} 