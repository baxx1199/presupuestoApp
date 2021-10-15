import { Expense } from "../models/expense.model";

export class IExpense{
    expense:Expense[];
    constructor(){
        this.expense=[]
    } 


    getOfLocaleStorage():Expense[]{
        let getInfo = localStorage.getItem("Expenses")!;
        return JSON.parse(getInfo);
    }
    setExpenseLocal(){
        const expenseInStorage = this.getOfLocaleStorage();
        if(expenseInStorage===null){
            return this.expense;
        }else{
            this. expense =  this.getOfLocaleStorage();
            return this.expense;
        }
    }
    deleteExpense(expenseIndex :number){
        console.log(this.expense)
    
        this.expense.splice(expenseIndex, 1);
        localStorage.setItem("Expenses", JSON.stringify(this.expense));
         
     }
     
    getTotalExpensesValue(){
        let totalExpenses:number=0;
        
        this.expense.forEach(expenditure =>{
          totalExpenses += expenditure.value;
        });

        
        return totalExpenses;
    }
    addNewExpense(descriptionNew:string, valueNew:number){
    this.expense.push( new Expense(descriptionNew,valueNew));
        let expensesTemp: Expense[]=[];

        if(localStorage.getItem("Expenses")===null){
            expensesTemp.push( new Expense(descriptionNew,valueNew));
            localStorage.setItem("Expenses", JSON.stringify(expensesTemp));
        }else{
            expensesTemp = this.getOfLocaleStorage();
            expensesTemp.push( new Expense(descriptionNew,valueNew));
            localStorage.setItem("Expenses", JSON.stringify(expensesTemp));
        }
       
    }
} 