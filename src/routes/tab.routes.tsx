import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ButtonNew } from "../components/ButtonNew";
import { HomeScreen } from "../screens/HomeScreen";
import { InboxScreen } from "../screens/InboxScreen";
import { NewScreen } from "../screens/NewScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#000"
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          paddingBottom: 5,
          fontSize: 10,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: "white"
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons name="home" size={size} color={color} />

            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons name="search" size={size} color={color} />

            return <Ionicons name="search-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="New"
        component={NewScreen}
        options={{
          tabBarIcon: ({ size }) => {
            return <ButtonNew size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />

            return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused)
              return <Ionicons name="person" size={size} color={color} />

            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
