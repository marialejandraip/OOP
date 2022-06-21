public class Car {
  Integer id;
  String license;
  //String driver;
  Account driver;
  Integer passenger;

  //la declaracion de las variables del metodo car
  //suelen tener el mismo nombre a la definicion de variables de la clase
  // se declara el constructor para definir paramtros obligatorios de car 
  public Car (String license, Account driver){
    //This respresenta el objeto de la clase
    this.license = license;
    this.driver = driver;
  }

  void printDataCar () {
    //System.out.println("License: "+ license +" driver: "+ driver);
    System.out.println("License: "+ license +" Name driver: "+ driver.name);

  }
}
