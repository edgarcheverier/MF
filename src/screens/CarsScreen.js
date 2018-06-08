import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import getData from '../components/getData';
import Icon from 'react-native-vector-icons/Ionicons';
const uuidv4 = require('uuid/v4');

class Cars extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [] // .carInfo -  .city - .contactInfo - .name  - .price - .url
    }
  }

  componentDidMount = async () => {
    let arr = [];
    let data = await getData();
    for (let i in data){
      arr.push(data[i].details)
    }
    this.setState({data: arr}); 
  }

  backScreen = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade",
    })
  }

  displayCarouse = () => {
    let arr = [];
    let quality;
    if (this.props.selectedQuality == 'Basic') {
      quality = 30
    } else {
      quality = 50
    }
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.props.selectedCity == this.state.data[i].city && Number(this.state.data[i].price) < quality) {
        arr.push(
          <View style={styles.carInfoContainer} key={uuidv4()}>
            <Text key={uuidv4()}> Cars in {this.state.data[i].city}</Text>
            <Image style={styles.image} source={{uri: this.state.data[i].url}}  key={uuidv4()}/>
            <Text key={uuidv4()}> Car Description: {this.state.data[i].carInfo}</Text>
            <Text key={uuidv4()}> Price Per Day: {this.state.data[i].price} €</Text>
            <Text key={uuidv4()}> Contact Information: {this.state.data[i].contactInfo}</Text>
            <Text key={uuidv4()}> Owner's Name: {this.state.data[i].name}</Text>
          </View>   
        ) 
      }
    }
    return arr;
  }
  render() {
    if (this.state.data.length > 0) {
      return (
        <View style={styles.container}>
          <ScrollView 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}>
            {this.displayCarouse()}
          </ScrollView>
          <Button style={styles.styleButton} title="Back to Search" onPress={this.backScreen}/>
        </View>
      )
    } else {
     return (
      <View style={styles.loadingContainer}>
        <Icon name="ios-cloud-download-outline" size={50}/>
        <Text>Loading...</Text>
      </View>
     )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  backIcon: {
    marginTop: 35,
    marginLeft: 12
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 150
  },
  carInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250
  },
  image: {
    marginTop: 20,
    marginBottom: 30,
    height: 180,
    width: 375,
  },
})

export default Cars;