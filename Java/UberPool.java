public class UberPool extends Car {
  String brand;
  String model;

  public UberPool(String license, Account driver, String brand, String model) {
    //No lo ves definido pero hace referencia al metodo contructor de Car el padre super clase
    super(license, driver);
    this.brand = brand;
    this.model = model;

    
  }
}
