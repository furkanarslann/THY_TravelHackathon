import { View, Text } from "react-native";
import React from "react";
import styles from "./Pagination.style";

const Pagination = ({ pageIndex }) => {
  return (
    <View style={styles.paginationWrapper}>
      {Array.from(Array(4).keys()).map((key, index) => (
        <View
          style={[
            styles.paginationDots,
            { opacity: pageIndex === index ? 1 : 0.2 },
          ]}
          key={index}
        />
      ))}
    </View>
  );
};

export default Pagination;
