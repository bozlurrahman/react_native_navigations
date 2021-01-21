import * as React from 'react';
import { Button, Image, View, Text, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function Feed({ route, navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Feed Screen</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
              title="Go back to first screen in stack"
              onPress={() => navigation.popToTop()}
          />
      </View>
  );
}

function Messages({ route, navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Messages Screen</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
              title="Go back to first screen in stack"
              onPress={() => navigation.popToTop()}
          />
      </View>
  );
}

function NestingNavigators() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ios-list-circle' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Feed" component={Feed} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default NestingNavigators;