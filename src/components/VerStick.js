import React from 'react';
import { View } from 'react-native'
import PropTypes from 'prop-types';


export default class Stick extends React.Component {

    render() {
        return (
            <View style={{
                width: 0.5,
                backgroundColor: this.props.color,
                height: this.props.height,
                position: 'absolute',
                opacity: 0.5,
                right: 0
            }} />
        )
    }
}

Stick.propTypes = {
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};



