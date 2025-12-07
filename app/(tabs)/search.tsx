import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { Image } from "react-native";
import MovieCard from "@/components/movieCard";
import { useState, useEffect } from "react";

import { fetchMovies } from "../../services/api";
import logo from "../../assets/images/logo.jpeg";
import SearchBar from "@/components/searchfile";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadmovies = async () => {
      try {

        if(searchQuery.trim()){
          await loadmovies();
        } else{
          reset()
        }
        setLoading(true);

        const data = await fetchMovies({ query: searchQuery }, false);
        setMovies(data);
      } catch (err: any) {
        setError(err.message || "Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadmovies();
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-[#001233]">
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
            release_date={item.release_date}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center">
              <Image
                source={logo}
                className="w-12 h-10 flex mt-20 mb-2 mx-auto"
              ></Image>
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text:string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">Error: {error}</Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-xl text-white font-bold">
                Search result for {""}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      ></FlatList>
    </View>
  );
};

export default Search;
