import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import BagStatus from "../components/BagStatusCard/BagStatus";

const BagDetails = () => {
  const bag = useSelector((state) => state.bag.bag)[0];
  console.log(bag);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.personalInfoContainer}>
        <View style={{borderBottomWidth:.5,borderBottomColor:"#ffffff",width:"100%",alignItems:"center",paddingBottom:15}}>
          <Text style={styles.text}>{bag.passengerInfo.name}</Text>
          <Text style={styles.text}>{bag.passengerInfo.surname}</Text>
        </View>
        <View>
          <Text style={styles.text}>PNR</Text>
          <Text style={styles.text}>{bag.passengerInfo.pnr}</Text>
        </View>
      </View>
    <Text style={{padding:20,fontSize:30,fontWeight:"bold",color:"#94a3b8"}}>LAST PROCESSES</Text>
      {   <FlatList
 
       style={{paddingHorizontal:10,marginTop:10}}
      data={bag.loadingStatus}
      initialNumToRender={7}

      renderItem={({ item }) => {
        return <BagStatus item={item}/>
      }}
    />  }
    </SafeAreaView>
  );
};

export default BagDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  personalInfoContainer: {
    backgroundColor: "#1e293b",
    padding: 20,
    justifyContent:"center",
    alignItems:"center"
  },
  text: {
    color: "#cbd5e1",fontSize:24,fontWeight:"400"
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
