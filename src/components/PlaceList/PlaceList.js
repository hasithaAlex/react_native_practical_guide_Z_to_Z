import { FlatList } from "react-native";
import React from "react";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.value}
          placeImag={info.item.image}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

export default placeList;
