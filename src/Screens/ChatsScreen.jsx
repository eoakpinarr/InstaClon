import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import StoryContainerComponent from '../UI/Components/StoryContainerComponent/StoryContainerComponent'
import MessageComponent from '../UI/Components/MessageComponent/MessageComponent'

const ChatsScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text className="text-lg font-light text-black ml-4">Chats</Text>
      ),
      headerRight: () => (
        <View className="flex flex-row gap-x-3 items-center mr-4">
          <Entypo name="new-message" size={24} color="black" onPress={() => navigation.navigate("Friends")} />
          <Ionicons name="notifications-outline" size={24} color="black" onPress={() => navigation.navigate("Friends")} />
        </View>
      )
    })
  }, [])
  return (
    <ScrollView className="bg-[#ffff]">
      <StoryContainerComponent />
      <MessageComponent />
      <MessageComponent />

    </ScrollView>
  )
}

export default ChatsScreen