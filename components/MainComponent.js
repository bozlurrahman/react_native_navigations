import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({selectedDish: dishId})
    }
    render() {
 
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={Menu} options={{ dishes: this.state.dishes, title: 'Main Menu' }} />
                    <Stack.Screen name="Dishdetail" component={Dishdetail} options={{ dishes: this.state.dishes, onPress: (dishId) => this.onDishSelect(dishId) }} />
                </Stack.Navigator>

                {/* <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} /> */}
                
            </NavigationContainer>
        );
    }
}
  
export default Main;