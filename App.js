import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Screens 
//import WelcomeScreen from './src/screens/WelcomeScreen';
import RentACar from './src/screens/RentACar';
import RentYourCar from './src/screens/RentYourCar';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MessageScreen from './src/screens/MessagesScreen';

// Redux
//import reduxStore from './src/store/reduxStore';
//const store = reduxStore();

Navigation.registerComponent("welcome-screen.WelcomeScreen", () => WelcomeScreen);
Navigation.registerComponent("rentACar-screen.RentACar", () => RentACar);
Navigation.registerComponent("rentYourCar.RentYourCar", () => RentYourCar);
Navigation.registerComponent("message-screen.MessageScreen", () => MessageScreen);


Navigation.startSingleScreenApp({
  screen: {
    screen: "welcome-screen.WelcomeScreen",
  },
  appStyle: {
    navBarHidden: true,
  }
})