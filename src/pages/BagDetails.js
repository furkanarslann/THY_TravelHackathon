import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import BagStatus from "../components/BagStatusCard/BagStatus";

const BagDetails = () => {
  const bag = useSelector((state) => state.bag.bag);
  console.log(bag);
  const lastProcess = bag?.loadingStatus[0];
  console.log(bag);
  const date = lastProcess?.processDate;
  const hour = date?.slice(10, 16);
  const fullDate = date?.slice(0, 10);
  const ListHeader = (
    <View>
      <View style={styles.personalInfoContainer}>
        <View
          style={{
            borderBottomWidth: 0.4,
            borderBottomColor: "#ffffff",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 15,
          }}
        >
          <View>
            <Text style={styles.textNameSurname}>
              {/* {bag.passengerInfo.name} */}EREN
            </Text>
            <Text style={styles.textNameSurname}>
              {/*  {bag.passengerInfo.surname} */}NILUFER
            </Text>
            <View>
              {/*               <Text style={styles.pnr}>PNR: {bag.passengerInfo.pnr}</Text>
               */}
              <Text style={styles.tag}>
                Tag: {bag?.baggageInfo.bagTagNumber}
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../assets/images/thy.png")}
              style={{ width: 75, height: 75 }}
            />
          </View>
        </View>
        <Text style={styles.lastProcessDate}>Last Process</Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.lastProcessStatus}>
              {bag?.baggageInfo.lastStatus}
            </Text>
            <Text style={styles.carrierNumber}>
              Carrier: {bag?.baggageInfo.bagTagCarrierNumber}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.hour}>{hour}</Text>
            <Text style={styles.text}>{fullDate}</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          fontWeight: "bold",
          color: "#94a3b8",
          textAlign: "center",
        }}
      >
        LAST PROCESSES
      </Text>
    </View>
  );
  console.log(bag);

  return (
    <SafeAreaView style={styles.container}>
      {bag?.length!=0&&bag&&
        <FlatList
          ListHeaderComponent={ListHeader}
          style={{ paddingHorizontal: 10, marginTop: 10 }}
          data={ bag.loadingStatus}
          initialNumToRender={7}
          renderItem={({ item }) => {
            return <BagStatus item={item} />;
          }}
        />
      }
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: "#cbd5e1",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
  },
  pnr: {
    color: "#cbd5e1",
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 5,
  },
  tag: {
    color: "#cbd5e1",
    fontSize: 20,
    fontWeight: "300",
    marginBottom: 5,
  },
  lastProcessDate: {
    color: "#cbd5e1",
    fontSize: 32,
    fontWeight: "200",
    paddingVertical: 10,
  },
  lastProcessStatus: {
    color: "#cbd5e1",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 5,
  },
  carrierNumber: {
    color: "#cbd5e1",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  hour: { fontSize: 48, fontWeight: "200", color: "#cbd5e1" },
  textNameSurname: {
    color: "#cbd5e1",
    fontSize: 36,
    fontWeight: "300",
    marginBottom: 5,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
