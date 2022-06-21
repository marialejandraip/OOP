import java.util.ArrayList;
import java.util.Map;

public class UberBlack extends Car {
  Map<String, Map<String,Integer>> typeCarAccepted;
  ArrayList<String> seatsMaterial;

  public UberBlack(String license, Account driver, String brand,  Map<String, Map<String,Integer>> typeCarAccepted, ArrayList<String> seatsMaterial) {
    //No lo ves definido pero hace referencia al metodo contructor de Car el padre super clase
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
    
  }
}