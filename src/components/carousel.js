import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default class MyCarousel extends Component {
  render () {
    return (
    <View style={styles.container}>
        <ScrollView 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false}>
            <Image style={styles.image} source={{uri: this.props.image}}/>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: "50%",
    },
    image: {
        height: "70%",
        width: "100%"
    }
})