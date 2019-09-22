import React from 'react';
import { View, Button, StyleSheet } from 'react-native'
import * as colors from '../assets/datas/Colors'

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
        headerStyle: {
            backgroundColor: colors.NAVIGATION_BACKGROUND_COLOR,
        },
        headerTintColor: colors.NAVIGATION_COLOR
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to ABC"
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