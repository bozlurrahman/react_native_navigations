import React, { Component } from 'react';
import { Button, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
        </View>
    );
}
  
function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go to Details... again" onPress={() => navigation.push('Details')} />
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
        </View>
    );
}

function HomeNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}


function FirstMenuScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>FirstMenu Screen</Text>
            <Button title="Go to SecondMenu" onPress={() => navigation.navigate('SecondMenu')} />
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
        </View>
    );
}
  
function SecondMenuScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SecondMenu Screen</Text>
            <Button title="Go to FirstMenu" onPress={() => navigation.push('FirstMenu')} />
            <Button onPress={() => navigation.toggleDrawer()} title="Toggle Drawer" />
        </View>
    );
}

function MenuNavigator() {
    return (
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="FirstMenu" component={FirstMenuScreen} />
            <Stack.Screen name="SecondMenu" component={SecondMenuScreen} />
        </Stack.Navigator>
    );
}

class Main extends Component {

    render() {
        return (
            <NavigationContainer>                
                <Drawer.Navigator >
                    <Drawer.Screen name="Home" component={HomeNavigator}/>
                    <Drawer.Screen name="Menu" component={MenuNavigator} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}
  
export default Main;