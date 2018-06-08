import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Calendar} from 'react-native-calendars';

class RentACar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: {},
      selectedCity: "Barcelona",
      selectedQuality: "Basic",
    };
  }
  goToCarsScreen = () => {
    this.props.navigator.push({
      screen: "cars-screen.Cars",
      animated: true,
      animationType: "fade",
      passProps: {
        selectedDay: this.state.selectedDay.day,
        selectedMonth: this.state.selectedDay.month,
        selectedYear: this.state.selectedDay.year,
        selectedCity: this.state.selectedCity, 
        selectedQuality: this.state.selectedQuality
      }
    })
  }

  submitForm = () => {
    console.log(this.state.selectedDay);
    this.goToCarsScreen();
  }

  backScreen = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade",
    })
  }

  onDayPress = day => {
    this.setState({
      selectedDay: day,
      selected: day.dateString
    });
  }
  updateCity = city => {
    this.setState({selectedCity: city})
  }

  updateQuality = quality => {
    this.setState({selectedQuality: quality})
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={this.backScreen} style={styles.backIcon}>
            <Icon name="ios-arrow-dropleft-outline" size={30}/>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Rent A Car</Text>
        </View>
        <View style={styles.scrollStyle}>
          <Calendar
            onDayPress={this.onDayPress}
            style={styles.calendar}
            hideExtraDays
            markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
          />
          <View style={styles.pickerContainer}>
              <Picker style={styles.pickerCitiesStyle} selectedValue={this.state.selectedCity} onValueChange={this.updateCity} >
                <Picker.Item label="Barcelona" value="Barcelona"/>
                <Picker.Item label="Helsinki" value="Helsinki"/>
                <Picker.Item label="Montreal" value="Montreal" />
                <Picker.Item label="Miami" value="Miami"/>
              </Picker>
              <Picker style={styles.pickerQuality} selectedValue={this.state.selectedQuality} onValueChange={this.updateQuality} >
                <Picker.Item label="Basic" value="Basic"/>
                <Picker.Item label="Comfortable" value="Comfortable"/>
              </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={this.submitForm}/>
          </View>
        </View> 
      </ScrollView>
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
    marginLeft: 118,
  },
  scrollStyle: {
    height: "200%"
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 210,

  },
  pickerCitiesStyle: {
    height: 150,
    width: 100,

  }, 
  pickerQuality: {
    height: 150,
    width: 100,
  },
  buttonContainer: {

  }
})

export default RentACar;
