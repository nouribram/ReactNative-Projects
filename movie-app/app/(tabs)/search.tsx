import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import MovieCard from '@/components/MovieCard'
import {images} from "@/constants/images";

const search = () => {

  
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
   
        <FlatList 
        data={movies}
         renderItem={({ item }) => <MovieCard { ...item} />} 
         />
    </View>
  )
}

export default search