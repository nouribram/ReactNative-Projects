import { View, Text, Image, TouchableOpacity , Touchable } from 'react-native'
import {Link} from "expo-router";
import React from 'react'

const MovieCard = ({ id, poster_path, title, vote_average, 
    release_data }: Movie) => {
        console.log(poster_path);
  return (
    <Link href={`/movie/${id}`} asChild>
       <TouchableOpacity className="w-[30%]">
            <Image 
              source={{
                uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://placehold.co/600x400/1a1a1a/fffffff.png'
                
              }}
              className="w-full h-52 rounded-lg"
              resizedMode="cover"
            />

            <Text className="text-sm font-bold text-white mt-2 numberOfLines={1}">{title}</Text>
             
            <View className="flex-row items-center justify-start gap-x-1">

            <Image source={icons.star} className="size-4" />

            <Text className="text-xs text-white font-bold uppercase">{Math.round(voute_average / 2)}</Text>
            
            </View>


            <View className="flex-row items-center justify-between">
              <Text className="text-xs text-light-300 font-medium mt-1">
               {release_data?.split('-')[0]}
              </Text>
              <Text className="text-xs font-medium text-light-300 uppercase">
                Movie
              </Text>
            </View>


       </TouchableOpacity>

    </Link>
  )
}

export default MovieCard