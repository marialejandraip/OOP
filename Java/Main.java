public class Main {
  public static void main(String[] args) {
    System.out.println("Hola mundo!");
    //Metodo constructor vacio
    //Car car = new Car();
    //car.driver = "Luis";
    //car.license = "ASD345";

    //Metodo constructor con parametros
    Car car = new Car("ASD345", new Account ("Luis", 12345678));
    car.passenger = 5;
    //System.out.println("Car license: " + car.license);
    car.printDataCar();

    //Metodo constructor vacio
    //Car car2 = new Car();
    //car2.driver = "Maria";
    //car2.license = "QWE123";

    //Metodo constructor con parametros
    Car car2 = new Car("QWE123", new Account("Maria", 98765432));
    //System.out.println("Car license: "+ car2.license);
    car2.printDataCar();
  } 
}
