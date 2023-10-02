import { Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [status, setStatus] = useState({})

  useEffect(() => {
    if (currentVisibleItem?.id === data?.id) {
      video.current?.playAsync();
    } else {
      video.current?.pauseAsync();
    }
  }, [currentVisibleItem])

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  return (
    <Pressable onPress={handlePlayer}>
      <View
        style={[styles.info, { bottom: 85 }]}
      >
        <Text style={styles.name}>{data?.name + ' '}
          <AntDesign name="checkcircle" size={14} color="cyan" />
        </Text>
        <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={35} color="#fff" />
          <Text style={styles.actionText}>30.3K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff" />
          <Text style={styles.actionText}>23</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" size={35} color="#fff" />
          <Text style={styles.actionText}>1.3K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5 name="share" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Ionicons name="disc-sharp" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.music}>
        <Text style={styles.musicText}>🎵 som original - @enesolucoes</Text>
      </View>

      <Video
        ref={video}
        style={{ width: '100%', height: heightScreen }}
        source={{ uri: data.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8
  },
  name: {
    color: '#fff',
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8
  },
  description: {
    color: '#fff',
    marginRight: 24,
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8
  },
  actions: {
    position: "absolute",
    zIndex: 99,
    right: 8,
    bottom: Platform.OS === "android" ? 65 : 170,
    gap: 8
  },
  actionText: {
    textAlign: "center",
    color: "#fff",
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8
  },
  music: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
    bottom: Platform.OS === "android" ? 55 : 170,
  },
  musicText: {
    color: "#fff",
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
    fontWeight: "bold",
  }
});
