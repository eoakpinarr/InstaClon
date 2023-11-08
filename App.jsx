import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './src/Screens/ContactsScreen';
import ChatsScreen from './src/Screens/ChatsScreen';
import SearchScreen from './src/Screens/SearchScreen';
import UserScreen from './src/Screens/UserScreen';
import Ionicons from "react-native-vector-icons/Ionicons"

const App = () => {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator()

  function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Chats'>
        <Tab.Screen name="Contacts" component={ContactsScreen} 
        options={{
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Chats" component={ChatsScreen}
        options={{
          headerTitle: "Chats",
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} 
        options={{
          headerTitle: "Search",
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="User" component={UserScreen} 
        options={{
          headerTitle: "User",
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MyTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App