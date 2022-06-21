from car import Car
from account import Account

if __name__ == "__main__":
  print("Hola Mundo")
  #car = Car()
  #car.license= "asd234"
  #car.driver = "Maria"
  #print(vars(car))

  car = Car ("ASD234", Account("Maria", 3454656))
  print(vars(car))
  print(vars(car.driver))

  #car2 = Car()
  #car2.license = "qwe234"
  #car2.driver= "Luis"
  #print(vars(car2))