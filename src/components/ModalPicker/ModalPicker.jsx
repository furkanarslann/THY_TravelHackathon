import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setWhere } from "../../redux/slices/airportSlice";

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
    <TouchableOpacity
      onPress={() => changeModalVisibility(false)}
      style={styles.touchableOpacity}
    >
        <View style={[styles.modal,{width:WIDTH-20,height:HEIGHT/2}]} >
            <ScrollView>


            {tags.map((option,index)=>{
                return <TouchableOpacity style={styles.option} key={index}  onPress={()=>onPressItem(option)}>
                    <Text style={styles.text}>{option}</Text>
                </TouchableOpacity>
            })}

            </ScrollView>
        </View>

    </TouchableOpacity>
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
