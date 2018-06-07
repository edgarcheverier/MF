//import * as firebase from 'firebase';
import firebase from '../firebase/firebase';
class Helpers {
  static setCity(carId, city){
    let carBrandPath = "/car/"+carId+"/details/city"
    return firebase.database().ref(carBrandPath).set(city)
  }
  static setCarBrand(carId, car){
    let carBrandPath = "/car/"+carId+"/details/car"
    return firebase.database().ref(carBrandPath).set(car)
  }
  static setCarModel(carId, model){
    let carBrandPath = "/car/"+carId+"/details/model"
    return firebase.database().ref(carBrandPath).set(model)
  }
  static setCarYear(carId, year){
    let carBrandPath = "/car/"+carId+"/details/year"
    return firebase.database().ref(carBrandPath).set(year)
  }
  static setCarPrice(carId, price){
    let carBrandPath = "/car/"+carId+"/details/price"
    return firebase.database().ref(carBrandPath).set(price)
  }
}

module.exports =  Helpers;