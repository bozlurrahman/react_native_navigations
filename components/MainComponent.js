import * as React from 'react';
import { Button, Image, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NestingNavigators from './NestingNavigators';
import NavigationLifecycle from './NavigationLifecycle';
import ModalStack from './ModalStack';

function HomeScreen({navigation, route, extraData}) {
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
    }, [route.params?.post]);

    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount(c => c + 1)} title="Update count" />
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button  style={{ margin: 40 }}
                title="Go Deawer Home"
                onPress={() => navigation.navigate('MyDrawer')}
            />
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: extraData,
                    });
                }}
            />

            <Button  style={{ margin: 40 }}
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            <Text>Count: {count}</Text>
            <Button  style={{ margin: 40 }}
                title="Go NestingNavigators"
                onPress={() => navigation.navigate('NestingNavigators')}
            />
            <Button  style={{ margin: 40 }}
                title="Go Messages Nesting Navigator"
                onPress={() => navigation.navigate('NestingNavigators', { screen: 'Messages' })}
            />
            <Button  style={{ margin: 40 }}
                title="Go NavigationLifecycle"
                onPress={() => navigation.navigate('NavigationLifecycle')}
            />
            <Button  style={{ margin: 40 }}
                title="Go ModalStack"
                onPress={() => navigation.navigate('ModalStack')}
            />
        </View>
    );
}
function DrawerHomeScreen({navigation, route}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drawer Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                    });
                }}
            />

            <Button  style={{ margin: 40 }}
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
            <Button  style={{ margin: 40 }}
                title="Go NestingNavigators"
                onPress={() => navigation.navigate('NestingNavigators')}
            />
            <Button  style={{ margin: 40 }}
                title="Go Messages Nesting Navigator"
                onPress={() => navigation.navigate('NestingNavigators', { screen: 'Messages' })}
            />
            <Button  style={{ margin: 40 }}
                title="Go NavigationLifecycle"
                onPress={() => navigation.navigate('NavigationLifecycle')}
            />
            <Button  style={{ margin: 40 }}
                title="Go ModalStack"
                onPress={() => navigation.navigate('ModalStack')}
            />
        </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    // Pass params back to home screen
                    navigation.navigate('Home', { post: postText });
                }}
            />
        </>
    );
}


function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => 
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('./images/logo.png')}
        />
    );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={DrawerHomeScreen} />
            <Drawer.Screen name="Details" component={DetailsScreen} />
            <Drawer.Screen name="CreatePost" component={CreatePostScreen} />
            <Drawer.Screen name="NestingNavigators" component={NestingNavigators} />
            <Drawer.Screen name="NavigationLifecycle" component={NavigationLifecycle} />
            <Drawer.Screen name="ModalStack" component={ModalStack} />
        </Drawer.Navigator>
    );
}


function Main() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1e60f4',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen name="Home" 
                options={{
                    title: "Home Screen", 
                    headerTitle: props => <LogoTitle {...props} />,
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                }}
                    
                } 
            >
                {props => <HomeScreen {...props} extraData={{extra: 'someData'}} />}
            </Stack.Screen>
            <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} />
            <Stack.Screen name="CreatePost" component={CreatePostScreen} />
            <Stack.Screen name="NestingNavigators" component={NestingNavigators} />
            <Stack.Screen name="NavigationLifecycle" component={NavigationLifecycle} />
            <Stack.Screen name="ModalStack" component={ModalStack} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Main;