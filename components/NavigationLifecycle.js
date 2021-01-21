import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeInnerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsInnerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function NavigationLifecycle() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="First">
                {() => (
                    <SettingsStack.Navigator>
                    <SettingsStack.Screen
                        name="Settings"
                        component={SettingsScreen}
                    />
                    <SettingsStack.Screen name="Profile" component={ProfileScreen} />
                    </SettingsStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="Second">
                {() => (
                    <HomeStack.Navigator>
                    <HomeStack.Screen name="Home" component={HomeInnerScreen} />
                    <HomeStack.Screen name="Details" component={DetailsInnerScreen} />
                    </HomeStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
