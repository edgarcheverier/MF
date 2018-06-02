import React, {Component} from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Calendar} from 'react-native-calendars';

class RentACar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: {},
      selectedCity: "",
    };
  }
  backScreen = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade",
    })
  }

  onDayPress = (day) => {
    this.setState({
      selectedDay: day,
      selected: day.dateString
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={this.backScreen} style={styles.backIcon}>
            <Icon name="ios-arrow-dropleft-outline" size={30}/>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Rent A Car Screen</Text>
        </View>
        <ScrollView>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
        </ScrollView>
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
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
})

export default RentACar;
