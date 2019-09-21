import React from 'react';
import { View, Button, StyleSheet } from 'react-native'
import * as colors from '../assets/datas/Colors'

export default class HomeScreen extends React.Component {

    // <Icon 
    // style={{ marginLeft: 10, marginRight: 6 }} 
    // name="chevron-left" size={18} color={colors.WHITE} />;

    static navigationOptions = {
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: colors.NAVIGATION_BACKGROUND_COLOR,
        },
        headerTintColor: colors.NAVIGATION_COLOR
    }

    // static navigationOptions = {
    //     headerBackImage: require('../../assets/icon.png'),
    // };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})