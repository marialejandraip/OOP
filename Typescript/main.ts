import {CheckingAccount} from './account'
import { Render } from './render';

//inheritance: Objects can share functionality from existing objects and create a family hierarchy, reuse code across clas
//Abstraction: Abstract complex functionality into an object that can be used as the base for other objects 
class Main {
  checkingAccount: CheckingAccount

  //is colled when a class is instantiated to create an object
  //A constructor can accept parameters that can be mapped to properties 
  constructor(){ // is want to see some initial data. 
    //Create CheckingAccount instance
    this.checkingAccount = new CheckingAccount('Balancito'); // in class is the constructor with title
    //this.checkingAccount.title = 'Balance account';
  }

}
//When class static then dont use this. because this is calling the class instanciated
Render.viewTemplate