import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "react-native";
import star from "../assets/icons/star.png";

interface movies {
  poster_path: string;
  title: string;
  id: number;
  vote_average: number;
  release_date: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: movies) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeold.co/600*400/1a1a1a/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white" numberOfLines={1}>{title}</Text>

        <View className="flex-row  items-center justify-start gap-x-1">
          <Image source={star} className="size-4" />
          <Text className="text-xs text-white">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-light-300 text-xs font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>

         
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
