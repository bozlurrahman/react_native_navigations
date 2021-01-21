import * as React from 'react';
import { Button, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./images/logo.png')}
    />
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

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
            headerTitle: props => <LogoTitle {...props} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Test;