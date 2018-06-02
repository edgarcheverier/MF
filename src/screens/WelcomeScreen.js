import React, {Component} from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import startTabs from '../Tabs/mainTab';

class WelcomeScreen extends Component {
  displayTabs = () => {
    startTabs()
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.imageOne} source={require('../assets/photo01.jpeg')}/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Moving Free</Text>
          <Icon name="ios-paper-plane-outline" size={30}/>
        </View>
        <View>
          <TouchableOpacity style={styles.rentAContainer} onPress={this.displayTabs}>
            <Text style={styles.rentATitle}>Rent A Car</Text>
            <Icon name="ios-car-outline" size={30}/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.rentUContainer} onPress={this.displayTabs}>
            <Text style={styles.rentUTitle}>Rent Your Car</Text>
            <Icon name="ios-cash-outline" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  imageOne: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "220%"
  },
  rentATitle: {
    fontSize: 15,
    color: "#4260A8",
  },
  rentUTitle: {
    fontSize: 15,
    color: "#4260A8",
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 125
  },
  title: {
    marginRight: 15,
    fontSize: 20,
  },
  rentAContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#e7e7e7",
    borderWidth: 0.5,
    borderStyle: "solid"
  },
  rentUContainer: {
    alignItems: "center",
    marginTop: "10%",
    backgroundColor: "transparent",
    borderColor: "#e7e7e7",
    borderWidth: 0.5,
    borderStyle: "solid"
  }
  
});

export default WelcomeScreen;
