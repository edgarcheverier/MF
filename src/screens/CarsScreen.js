import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getData from '../components/getData';


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
    console.log('Data: ', this.state.data)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Cars Component</Text>
        <Text>{this.props.selectedCity}</Text>
        <Text>{this.props.selectedQuality}</Text>
        <Text>{this.props.selectedDay}</Text>
        <Text>{this.props.selectedMonth}</Text>
        <Text>{this.props.selectedYear}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  }
})

export default Cars;