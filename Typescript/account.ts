export class CheckingAccount {
  private _balance =0;
  title: string // properties 

  constructor(title:string){ //initiaization routine
    this.title = title //properties 'automatic properties'
  }
  // ==> constructor (public title: string){} is same as ^

  get balance() {
    return this._balance
  }

  set balance(value:number){
    //filtering
    this._balance = value;
  }

  deposit(amount: number){
    this.balance +=amount;
  }

  withdawal(amount: number){
    this.balance -=amount
  }
}

