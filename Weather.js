import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from "prop-types";

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subTitle: "and this one as well then?",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
  },
  Thunderstorm : {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle : {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Rain : {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
  },
  Snow : {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
  },
  Atmosphere : {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Mist : {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Smoke : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
  Haze : {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Fog : {
    iconName: "weather-fog",
    gradient: ["#D7D2CC", "#304352"],
  },
  Sand : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
  Dust : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
  Ash : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
  Squall : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
  Tornado : {
    iconName: "weather-sunny",
    gradient: ["#c2e59c", "#64b3f4"],
  },
}

export default function Weather({ condition, temp }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName}
          size={120}
          color="white"
        />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={{...styles.bottomContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm", 
    "Drizzle", 
    "Rain", 
    "Snow", 
    "Atmosphere",
    "Mist", "Smoke", "Haze", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 56,
    color: "white",
    marginLeft: 20,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 20,
  },
  subTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});