import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"


const SearchComponent = () => {
  return (
    <View className="p-4 m-6 bg-[#f7f7fc] rounded-[4px]">
        <View className="flex flex-row items-center gap-x-3">
          <Ionicons name="search-outline" />
          <TextInput placeholder='Search' />
        </View>
      </View>
  )
}

export default SearchComponent