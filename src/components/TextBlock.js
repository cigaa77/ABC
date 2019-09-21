import React from 'react';
import { View } from 'react-native';
import TextCustom from './TextCustom';
import PropTypes from 'prop-types';
import * as dist from '../assets/datas/ResponseDatas'

export default class TextBlock extends React.Component {
    render() {
        return (
            <View style={{
                alignItems: this.props.align ? this.props.align : 'baseline',
                paddingTop: this.props.pTop,
                paddingBottom: this.props.pBottom,
                paddingHorizontal: dist.PADDING_3
            }}>
                <TextCustom fontSize={this.props.fontSize} color={this.props.color}>{this.props.children}</TextCustom>
            </View>
        )
    }
}

TextBlock.propTypes = {
    pTop: PropTypes.number.isRequired,
    pBottom: PropTypes.number.isRequired,
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    align: PropTypes.string
}
