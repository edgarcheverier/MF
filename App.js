import { Navigation } from 'react-native-navigation';

import RentACar from './src/screens/RentACar';
import RentYourCar from './src/screens/RentYourCar';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CarSubmitted from './src/screens/CarSubmittedScreen';
import Cars from './src/screens/CarsScreen';

Navigation.registerComponent("welcome-screen.WelcomeScreen", () => WelcomeScreen);
Navigation.registerComponent("rentACar-screen.RentACar", () => RentACar);
Navigation.registerComponent("rentYourCar.RentYourCar", () => RentYourCar);
Navigation.registerComponent("car-submit-screen.CarSubmitted", () => CarSubmitted);
Navigation.registerComponent("cars-screen.Cars", () => Cars);


Navigation.startSingleScreenApp({
  screen: {
    screen: "welcome-screen.WelcomeScreen",
  },
  appStyle: {
    navBarHidden: true,
  }
})