import { View, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const placeOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  ));
  return <View>{placeOutput}</View>;
};

export default placeList;
