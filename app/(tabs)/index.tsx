import { useState, useEffect } from "react";
import { Link } from "expo-router";
import MovieCard from "@/components/movieCard";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Image } from "react-native";
import logo from "../../assets/images/logo.jpeg";
import SearchBar from "@/components/searchfile";
// import { SearchBar } from "react-native-screens";
import { useRouter } from "expo-router";
import { fetchMovies } from "../../services/api";

export default function Index() {
  const router = useRouter();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadmovies = async () => {
      try {
        setLoading(true);

        const data = await fetchMovies({ query: "" });
        setMovies(data);
      } catch (err: any) {
        setError(err.message || "Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadmovies();
  }, []);

  return (
    <View className=" flex-1 bg-[#001233]">
      <Image source={logo} className="w-12 h-10 flex mt-20 mb-2 mx-auto " />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : error ? (
        <Text>Error:{error}</Text>
      ) : (
        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() =>  router.push("/search")}
            placeholder="Search for a movies"
          />

          <>
            <Text className="text-lg ml-5 text-white font-bold  mb-3">
              Latest Movies
            </Text>

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
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 mx-3  pb-32"
            />
          </>
        </View>
      )}
    </View>
  );
}
