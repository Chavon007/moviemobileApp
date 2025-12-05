import { View, Text, TextInput } from "react-native";
import search from "../assets/images/search.png";
import React from "react";
import { Image } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center rounded-full mx-5 bg-black  px-2 py-2 bg-drak-200 ">
      <Image
        source={search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1   ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
