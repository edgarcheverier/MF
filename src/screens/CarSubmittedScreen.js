import React, {Component} from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CarSubmitted extends Component {
  constructor(props){
    super(props);
  }
  backhome = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade"
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Your Car Is Published Now</Text>
          <Text style={styles.tank} >Thank you!</Text>
          <Icon style={styles.iconStyle} name="ios-happy-outline" size={30} />
          <Button title="Back Home" onPress={this.backhome}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  content: {
    alignItems: "center",
    marginTop: 130
  },
  iconStyle: {
    marginBottom: 50
  },
  tank: {
    marginBottom: 20
  }
})

export default CarSubmitted;