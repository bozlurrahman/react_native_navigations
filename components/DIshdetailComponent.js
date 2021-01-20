import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card>
                    <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
                    <Card.Image source={require('./images/uthappizza.png')} />
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        console.log('this.props', this.props);
        const {dishId} = this.props.route.params;
        return(
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}


export default Dishdetail;