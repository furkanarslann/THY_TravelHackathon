import { View, Text, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalPicker from "./ModalPicker/ModalPicker";

const Search = () => {
    const [where,setGG]=useState("");
    const [isVisible,setIsVisible]=useState(false);
    const changeModalVisibility=(bool)=>{
        setIsVisible(bool);

    }
    console.log(where);
  return (
    <View>
      <TouchableOpacity style={styles.touchableOpacity} onPress={()=>changeModalVisibility(true)}>
        <Text style={styles.text}>{where}</Text>
      </TouchableOpacity>

      <Modal transparent={true} animationType="fade"  visible={isVisible} onRequestClose={()=>changeModalVisibility(false)}>
<ModalPicker changeModalVisibility={changeModalVisibility} setGG={setGG} />
      </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "white",
   
    paddingHorizontal: 20,
    
  },
  text: { marginVertical: 20, fontSize: 24,fontWeight:"bold" },
});
