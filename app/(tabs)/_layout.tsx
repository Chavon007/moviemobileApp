import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Tabs } from "expo-router";
import { Assets } from "@react-navigation/elements";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/icons/home.png")}
                style={{ width: 30, tintColor: focused ? "#77bbf0a9" : "gray" }}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/icons/search.png")}
                style={{ width: 30, tintColor: focused ? "#77bbf0a9" : "gray" }}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/saved.png")}
              style={{ width: 30, tintColor: focused ? "#77bbf0a9" : "gray" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/icons/profile.png")}
              style={{ width: 30, tintColor: focused ? "#77bbf0a9" : "gray" }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
