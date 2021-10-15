import { Income } from "../models/income.models";

export class IIncome{
    incomes:Income[];
    constructor(){
        this.incomes=[];
    }

    deleteIncome(incomeIndex :number){

            this.incomes.splice(incomeIndex, 1);
            localStorage.setItem("incomes", JSON.stringify(this.incomes));
        
    }

    setIncomesLocal(): Income[]{
        const incomesInStorage = this.getOfLocaleStorage();
        if(incomesInStorage===null){
            return this.incomes;
        }else{
            this. incomes =  this.getOfLocaleStorage();
            return this.incomes;
        }
    }
    getOfLocaleStorage():Income[]{
        let getInfo = localStorage.getItem("incomes")!;
       return JSON.parse(getInfo);
    }

    getTotalIncomesValue():number{
        let totalIncome:number=0;
        
         this.incomes.forEach(income => {
          totalIncome += income.value;
        });
        return totalIncome;
    }

    addNewIncome(descriptionNew:string, valueNew:number){
        this.incomes.push( new Income(descriptionNew,valueNew));
        
        let incomesTemp: Income[]=[];

        if(localStorage.getItem("incomes")===null){
            incomesTemp.push( new Income(descriptionNew,valueNew));
            
            localStorage.setItem("incomes", JSON.stringify(incomesTemp));
        }else{
            incomesTemp = this.getOfLocaleStorage();
            
            incomesTemp.push( new Income(descriptionNew,valueNew));
            
            localStorage.setItem("incomes", JSON.stringify(incomesTemp));
        }
       
    }
}