import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { Image } from "react-native";
import logo from "../../assets/images/logo.jpeg";
import SearchBar from "@/components/searchfile";
// import { SearchBar } from "react-native-screens";

export default function Index() {
  return (
    <View className=" flex-1 bg-[#001233]">
      <ScrollView
        className=" flex-1 px-5 bg-red-100"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={logo} className="w-12 h-10 flex mt-20 mb-5 mx-auto " />
      </ScrollView>

      <View className="flex-1 mt-5">
        <SearchBar />
      </View>
    </View>
  );
}
