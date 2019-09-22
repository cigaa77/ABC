import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types';

export default class Stick extends React.Component {
    render() {
        return (
            <View style={{
                height: this.props.height,
                width: '100%',
                marginTop: 0,
                backgroundColor: this.props.color,
                opacity: this.props.opacity ? this.props.opacity / 100 : 1,
            }} />
        );
    }
}

Stick.propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    opacity: PropTypes.number,
    style: PropTypes.object
}