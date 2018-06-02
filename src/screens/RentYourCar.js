import React, {Component} from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class RentYourCar extends Component {
  backScreen = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade",
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={this.backScreen} style={styles.backIcon}>
            <Icon name="ios-arrow-dropleft-outline" size={30}/>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Rent Your Car Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    display: "flex",  
  },
  navContainer: {
    flexDirection: "row",

  },
  backIcon: {
    marginTop: 35,
    marginLeft: 12
  },
  navTitle: {
    marginTop: 40,
    marginLeft: 95,
  }
})

export default RentYourCar;
