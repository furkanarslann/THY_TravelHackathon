import { View, Text, StyleSheet, Dimensions, FlatList, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ModalPicker = ({ changeModalVisibility, setWhere, setCity }) => {
  const tags = useSelector((state) => state.airport.tags);
  const airports = useSelector((state) => state.airport.airports);
console.log(airports);
  const [filteredData, setFilteredData] = useState(tags);
  const [search, setSearch] = useState("");
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  const onPressItem = (option) => {
    setWhere(option.code);
    setCity(option.city);
    changeModalVisibility(false);
  };
  const inputChangeHandler = (text) => {
    setSearch(text);
    const newData = tags.filter((item) => item.code.includes(text.toUpperCase()));
    setSearch(text);
    setFilteredData(newData);
  };

  return (
    <Pressable
      onPress={() => changeModalVisibility(false)}
      style={styles.touchableOpacity}
    >
      <View style={[styles.modal, { width: WIDTH / 1.5,  height: HEIGHT/1.3}]}>
        <Text style={{textAlign:"center",fontSize:32,marginBottom:10,fontWeight:"200"}}>Departure Airport</Text>
        <TextInput
          onChangeText={(text) => inputChangeHandler(text)}
          value={search}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius:10
          }}
        />
        {/*    {tags.map((option,index)=>{
                return <TouchableOpacity     
                style={styles.option} key={index}  onPress={()=>onPressItem(option)}>
                    <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
            })} */}
        <FlatList
          data={filteredData}
          initialNumToRender={1}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={styles.option}
                onPress={() => onPressItem(item)}
              >
                <Text style={styles.text}>{item.code}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </Pressable>
  );
};

export default ModalPicker;
const styles = StyleSheet.create({
  touchableOpacity: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  option: {},
});
