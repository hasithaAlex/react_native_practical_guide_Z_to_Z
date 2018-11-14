import { ScrollView } from "react-native";
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
  return <ScrollView>{placeOutput}</ScrollView>;
};

export default placeList;
