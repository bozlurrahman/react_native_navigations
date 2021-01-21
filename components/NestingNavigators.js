import * as React from 'react';
import { Button, Image, View, Text, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default NestingNavigators;