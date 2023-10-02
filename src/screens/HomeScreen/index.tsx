import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity, View
} from "react-native";
import { FeedItem } from "../../components/FeedItem";

const { height: heightScreen } = Dimensions.get("screen")

export function HomeScreen() {
  let feedItems = [
    {
      id: '1',
      video: "https://i.imgur.com/00JoEpF.mp4",
      name: 'Ene Soluções',
      description: 'Criando o Spotify do zero com RN',
    },
    {
      id: '2',
      video: "https://i.imgur.com/AfOKB6u.mp4",
      name: 'Ene Soluções',
      description: 'Fala turma, mais um Dicas para Dev! pt.2 #fy'
    },
    {
      id: '3',
      video: "https://i.imgur.com/TAW1Zve.mp4",
      name: 'Ene Soluções',
      description: 'Inteligencia Artificial que faz ANIMACOES!',
    }
  ]

  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: "#FFF" }]}>Para Você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View >

      <FlatList
        data={feedItems}
        renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
        showsVerticalScrollIndicator={false}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    top: 6,
    right: 0,
    left: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 55,
    zIndex: 99
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2
  },
  indicator: {
    backgroundColor: "#fff",
    width: 32,
    height: 2,
    alignSelf: "center"
  }
});
