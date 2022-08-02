import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setWhere } from "../../redux/slices/airportSlice";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const ModalPicker = ({ changeModalVisibility,setGG }) => {
    const WIDTH=Dimensions.get("window").width;
    const HEIGHT=Dimensions.get("window").height ;
    const tags=useSelector((state)=>state.airport.tags);
    const where=useSelector((state)=>state.airport.where);
const dispatch=useDispatch();
    const [wheree, setWheree]=useState("");
    const onPressItem=(option)=>{
        dispatch(setWhere(option));
        setGG(option);
        changeModalVisibility(false);
    }
    
    
  return (
    <Pressable
      onPress={() => changeModalVisibility(false)}
      style={styles.touchableOpacity}
    >
        <View style={[styles.modal,{width:WIDTH-20,height:HEIGHT/2}]} >
 

         {/*    {tags.map((option,index)=>{
                return <TouchableOpacity     
                style={styles.option} key={index}  onPress={()=>onPressItem(option)}>
                    <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
            })} */}
             <FlatList

      data={tags}
      initialNumToRender={1}

      renderItem={({ item }) => {
        return <Pressable     
        style={styles.option}   onPress={()=>onPressItem(item)}>
            <Text style={styles.text}>{item}</Text>
        </Pressable> 
      }}
    />

         </View>

    </Pressable>
  );
};

export default ModalPicker;
const styles = StyleSheet.create({
  touchableOpacity: {
    alignItems:"center",
    justifyContent:"center",
    
  },
  text: { marginVertical: 20, fontSize: 24,fontWeight:"bold",textAlign:"center" },
  modal:{
    backgroundColor:"white",
    borderRadius:10
  },
  option:{
    alignItems:"flex-start",
  }
});
