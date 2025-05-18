import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import MovieCard from '@/components/MovieCard'
import {images} from "@/constants/images";

const search = () => {

  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" />
   
        <FlatList 
        data={movies}
         renderItem={({ item }) => <MovieCard { ...item} />} 
         keyExtractor={(item) => item.id.toString()}
         className="px-5"
         numColumns={3}
         columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16

         }}

         contentContainerStyle={{ paddingBottom: 100 }}
         ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center '>
              <Image source={icons.logo} className="w-12 h-10" />
            </View>

            <View className="my-5">
               <SearchBar placeholder="Search Movies ..." />
            </View>

            {moviesloading && (
              <ActivityIndicator size="large" color="#0000ff" className="my-3"/>
            )}
          </>
         }
       />
    </View>
  )
}

export default search