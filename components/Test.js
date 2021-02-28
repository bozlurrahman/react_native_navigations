import * as React from 'react';
import { Button, Image, Text, View, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogoTitle(props) {
  console.log('props::', props);
  return (
      <TouchableOpacity  activeOpacity = { .5 } onPress={ props.toggleTheDwawer }>
          <Image style={{ width: 50, height: 50 }}
              source={require('./images/logo.png')}
          />
      </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);
  const toggleTheDwawer = () => navigation.toggleDrawer()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);

  return <Text>Count: {count}</Text>;
}

const Stack = createStackNavigator();

function Test() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => {
              const toggleTheDwawer = () => navigation.toggleDrawer()
              return <LogoTitle {...props} toggleTheDwawer={toggleTheDwawer} />
            },
            headerTitle: "Home Test Page",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Test;