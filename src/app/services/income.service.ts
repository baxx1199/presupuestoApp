import { Income } from "../models/income.models";

export class IIncome{
    incomes:Income[]=[
        
    ];

    deleteIncome(incomeD :Income){
        
        console.log("primero",this.incomes)
        const incomeIndex:number = this.incomes.indexOf(incomeD);
        console.log("elemento seleccionado",incomeD)
        console.log("elemento eliminado",incomeIndex)
        console.log("elemento eliminado",this.incomes[incomeIndex])
        this.incomes.splice(incomeIndex,1);
        this.saveInLocaleStorage();
        this.setIncomesLocal("desde delet servicio");
        console.log("segundo",this.incomes)
        
        
    }

 
    saveInLocaleStorage(){
        
        let incomeJson:string =JSON.stringify(this.incomes);
        localStorage.setItem("incomes",incomeJson);
        
    }
    setIncomesLocal(msn:string){
        const incomesInStorage = this.getOfLocaleStorage();
        this.incomes = incomesInStorage;
        console.log(msn, incomesInStorage);
    }
    getOfLocaleStorage():Income[]{
        let getInfo = localStorage.getItem("incomes")!;
       return JSON.parse(getInfo);
    }

    getTotalIncomesValue():number{
        let totalIncome:number=0;
        this.setIncomesLocal("desde getTotalIncome en servicio");
         this.incomes.forEach(income => {
          totalIncome += income.value;
        });
        return totalIncome;
    }

    addNewIncome(descriptionNew:string, valueNew:number){
        this.setIncomesLocal("desde agregar ingreso en servicio");
       this.incomes.push( new Income(descriptionNew,valueNew));
       this.saveInLocaleStorage();
       this.setIncomesLocal("desde agregar ingreso en servicio segunda vez");
    }
}