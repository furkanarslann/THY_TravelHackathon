import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ToModalPicker = ({ changeModalVisibilityTo, setTo, setToCity }) => {
  const tags = useSelector((state) => state.airport.tags);

  const [filteredData, setFilteredData] = useState(tags);
  console.log(tags);
  const [search, setSearch] = useState("");
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  const where = useSelector((state) => state.airport.where);
  const dispatch = useDispatch();
  const onPressItem = (option) => {
    setTo(option.code);
    setToCity(option.city);
    changeModalVisibilityTo(false);
  };
  const inputChangeHandler = (text) => {
    const newData = tags.filter((item) =>
      item.code.includes(text.toUpperCase())
    );
    setSearch(text);
    setFilteredData(newData);
  };
  return (
    <Pressable
      onPress={() => changeModalVisibilityTo(false)}
      style={styles.touchableOpacity}
    >
      <View
        style={[styles.modal, { width: WIDTH / 1.5, height: HEIGHT / 1.3 }]}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 32,
            marginBottom: 10,
            fontWeight: "200",
          }}
        >
          Arrival Airport
        </Text>

        <TextInput
          onChangeText={(text) => inputChangeHandler(text)}
          value={search}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
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

export default ToModalPicker;
const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
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
  option: {
    backgroundColor: "#F7F5F5",
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4,
  },
});
