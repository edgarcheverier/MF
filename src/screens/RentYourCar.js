import React, {Component} from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, TextInput, Picker, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

//import * as firebase from 'firebase';
import Helpers from '../components/helper'; 
import TriggerImage from '../components/fetchImage';

const uuidv4 = require('uuid/v4');
let uid = uuidv4();

class RentYourCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: "",
      carBrand: "",
      carModel: "",
      Year: "",
      PriceDay: "",
      pickedImagedOne: null
    }
  }
  backScreen = () => {
    this.props.navigator.push({
      screen: "welcome-screen.WelcomeScreen",
      animated: true,
      animationType: "fade",
    })
  }
  updateCity = city => {
    this.setState({selectedCity: city})
  }
  updateCarBrand = text => {
    this.setState({carBrand: text})
  }

  updateModel = text => {
    this.setState({carModel: text})
  }

  updateYear = year => {
    this.setState({Year: year})
  }

  updateThePrice = text => {
    this.setState({PriceDay: text})
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image"}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        if (this.state.pickedImagedOne == null) {
          this.setState({pickedImagedOne: { uri: res.uri, base64: res.data }});
        }
      }
    });
  }

  submitYourCar = () => {
    console.log('this is the image: ', this.state.pickedImagedOne);
    //TriggerImage.trigger(this.state.pickedImagedOne)
    try {
      this.state.selectedCity ?  Helpers.setCity(uid, this.state.selectedCity) : null
      this.state.carBrand ?  Helpers.setCarBrand(uid, this.state.carBrand) : null
      this.state.carModel ?  Helpers.setCarModel(uid, this.state.carModel) : null
      this.state.Year ?  Helpers.setCarYear(uid, this.state.Year) : null
      this.state.PriceDay ?  Helpers.setCarPrice(uid, this.state.PriceDay) : null
      TriggerImage.trigger(this.state.pickedImagedOne)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={this.backScreen} style={styles.backIcon}>
            <Icon name="ios-arrow-dropleft-outline" size={30}/>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Rent Your Car</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker style={styles.mainPicker} selectedValue={this.state.selectedCity} onValueChange={this.updateCity}>
            <Picker.Item label="Barcelona" value="Barcelona"/>
            <Picker.Item label="Helsinki" value="Helsinki"/>
            <Picker.Item label="Montreal" value="Montreal" />
            <Picker.Item label="Miami" value="Miami"/>
          </Picker>
        </View>
        <View style={styles.carInfoContainer}>
          <TextInput style={styles.inputs} placeholder="Car Brand" onChangeText={this.updateCarBrand}/>
          <TextInput style={styles.inputs} placeholder="Model" onChangeText={this.updateModel}/>
        </View>
        <View style={styles.carInfoContainer}>
          <TextInput style={styles.inputs} placeholder="Year" onChangeText={this.updateYear}/>
          <TextInput style={styles.inputs} placeholder="Price Per Day" onChangeText={this.updateThePrice}/>
        </View>
        <View style={styles.camaraContainer}>
          <View style={styles.placeholder}>
            <Image source={this.state.pickedImagedOne} style={styles.previewImage} />
          </View>
          <View style={styles.button}>
            <Button title="Pick Images" onPress={this.pickImageHandler} />
          </View>
      </View>
        <Button title="Submit Your Car" onPress={this.submitYourCar}/>
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
    marginLeft: 110,
  },
  mainPicker:{
    height: 250,
    width:150,
    alignSelf: "center",
  },
  carInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  inputs: {
    width: 170,
    height: 38,
    padding: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e7e7e7",
  },
  camaraContainer: {
    marginTop: 18,
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: 120
  },
  button: {
    margin: 8
  },
  previewImage: {
      width: "100%",
      height: "100%"
  }
})

export default RentYourCar;
