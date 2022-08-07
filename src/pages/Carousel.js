import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../components/CarouselCard/Card";
import Pagination from "../components/PaginationDots/Pagination";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const width = Dimensions.get("window").width;
  console.log(sliderState.currentPage);
  const navigation = useNavigation();

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;
console.log(pageIndex);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "70%",
        }}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      >
        <Card
          header="Merhaba! THY serüvenine hoşgeldin !"
          paragraph="THY serüveni sizlere maksimum düzeyde hizmeti hedefleyerek birden fazla fırsatlar sunar. Fırsatlar ve genel bilgi için kaydırınız."
          imageLocation={require("../assets/images/welcoming.png")}
        />
        <Card
          header="Bilet Al"
          paragraph="299.99 TRY'den başlayan fiyatlarla uçmaya hazır olun!"
          imageLocation={require("../assets/images/sales.png")}
        />
        <Card
          header="Uçuş Bul"
          paragraph="Gitmek istediğiniz varış yerini seçerek uçuşlar hakkında genel bilgiye ulaşabilirsiniz."
          imageLocation={require("../assets/images/aircraft.png")}
        />
        <Card
          header="Miles&Smiles üyesi misiniz?"
          paragraph="Ödül bilet ve ücretsiz kabin yükseltme gibi benzersiz avantajlardan faydalanmak istiyorsanız bu fırsatı kaçırmayın!"
          imageLocation={require("../assets/images/membership.png")}
        />
      </ScrollView>

      <Text style={{ textAlign: "center", fontSize: 17 }}>
        Uçuş bulmak için tıklayınız !
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
        opacity={0.5}
      >
        <Text style={{ textAlign: "center" }}>
          <Ionicons name="arrow-forward-circle-outline" size={55} color="red" />
        </Text>
      </TouchableOpacity>
      <Pagination pageIndex={pageIndex} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 230,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#6CC2F4E1",
    marginLeft: 10,
  },
  button: {
    paddingBottom: 50,
  },
  buttonInactive: {},
});

export default Carousel;
