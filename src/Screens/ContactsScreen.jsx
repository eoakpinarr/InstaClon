import { View, Text, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from "react-native-vector-icons/Entypo"
import SearchComponent from '../UI/Components/SearchComponent/SearchComponent'
import ContactsListItem from '../UI/Components/ContactsListItem/ContactsListItem'

const ContactsScreen = () => {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text className="text-lg font-light text-black ml-6">Contacts</Text>
      ),
      headerRight: () => (
        <View className="flex flex-row items-center mr-6">
          <Entypo name="plus" size={24} color="black" />
        </View>
      )
    })
  }, [])

  return (
    <View className="flex-1 bg-white">
      <SearchComponent />
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />
      <ContactsListItem />

    </View>
  )
}

export default ContactsScreen