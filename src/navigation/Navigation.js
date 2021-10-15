import * as React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TwoBoxScreen from "../screens/TwoBoxScreen";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import AutomationScreen from "../screens/AutomationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AddTowerScreen from "../screens/AddTowerScreen";
import QrScanScreen from "../screens/QrScanScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E5E5E5"
        translucent={false}
      />
      <Stack.Navigator headerMode="none" initialRouteName={"tabs"}>
        <Stack.Screen name="tabs" component={MyTabs} />
        <Stack.Screen name="TwoBoxScreen" component={TwoBoxScreen} />
        <Stack.Screen name="AddTowerScreen" component={AddTowerScreen} />
        <Stack.Screen name="QrScanScreen" component={QrScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: true,
        activeTintColor: "#333333",
        inactiveTintColor: "#919191",
        tabStyle: {
          backgroundColor: "#fff",
        },

        labelStyle: {
          bottom: 14,
        },

        style: {
          height: 75,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return <Ionicons name="home-sharp" size={24} color={color} />;
            else
              return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Automation",

          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return <Ionicons name="ios-cube" size={24} color={color} />;
            else
              return (
                <Ionicons name="ios-cube-outline" size={24} color={color} />
              );
          },
        }}
        name="AutomationScreen"
        component={AutomationScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Profile",

          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <View>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "tomato",
                      position: "absolute",
                      zIndex: 10,
                      right: 0,
                    }}
                  />
                  <Ionicons name="person-circle" size={24} color={color} />
                </View>
              );
            else
              return (
                <View>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "tomato",
                      position: "absolute",
                      zIndex: 10,
                      right: 0,
                    }}
                  />
                  <Ionicons
                    name="person-circle-outline"
                    size={24}
                    color={color}
                  />
                </View>
              );
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
