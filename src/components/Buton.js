import React from 'react'
import { View } from 'react-native'
import * as colors from '../assets/datas/Colors';
import TextCustom from '../components/TextCustom';
import PropTypes from 'prop-types'



export default class Buton extends React.Component {
    render() {
        return (
            <View style={{
                height: this.props.height,
                width: this.props.width,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.props.backgroundColor,
                borderColor: this.props.borderColor ? this.props.borderColor : colors.TEXT_COLOR_1,
                borderWidth: 1,
                borderRadius: 5
            }}>
                <TextCustom fontSize={this.props.fontSize} color={this.props.textColor}>{this.props.children}</TextCustom>
            </View>
        )
    }
}

Buton.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number,
    backgroundColor: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    textColor: PropTypes.string.isRequired,
    borderColor: PropTypes.string

}