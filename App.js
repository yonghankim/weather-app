import React from 'react';
import { Alert } from 'react-native';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from 'axios';

const API_KEY = "Input Weather API Key (https://openweathermap.org/api)";

export default class extends React.Component {

  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
    this.setState({ 
      isLoading: false, 
      condition: data.weather[0].main,
      temp: data.main.temp,
    });
  };

  getLocation = async() => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      // Send to API and Get Weather
      this.getWeather(latitude, longitude);
      // this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  
  render () {
    const { isLoading, temp, condition } = this.state;
    return (
      isLoading 
      ? <Loading /> 
      : <Weather condition={condition} temp={Math.round(temp)} />
    );
  }
}
