import React from 'react';
import { View } from 'react-native'
import TextCustom from '../components/TextCustom'
import PropTypes from 'prop-types'


export default class Circle extends React.Component {
    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor,
                height: this.props.size,
                width: this.props.size,
                borderRadius: this.props.size / 2,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {this.props.children &&
                    <TextCustom color={this.props.color ? this.props.color : '#FFFFFF'}
                        fontSize={this.props.fontSize} >{this.props.children}</TextCustom>
                }
            </View>
        )
    }
}

Circle.propTypes = {
    size: PropTypes.number.isRequired,
    fontSize: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string.isRequired
}