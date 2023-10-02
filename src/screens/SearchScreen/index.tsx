import {
  StyleSheet, Text
} from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>teste</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
});
