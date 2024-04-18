import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";

const HomeScreen: React.FC<any> = ({}): JSX.Element => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text>hii</Text>
    </ScrollView>
  );
};

export { HomeScreen };
