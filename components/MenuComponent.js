import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (
            <ListItem bottomDivider key={index} >
                <Avatar source={{uri: require('./images/uthappizza.png')}} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        );
    };

    return (
        <>
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={(item, index) => index.toString()}
                />
        </>
    );
}


export default Menu;
