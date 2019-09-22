import React from 'react';
import { Text, Dimensions } from 'react-native';
import Proptypes from 'prop-types';

const CurrentWitdh = Dimensions.get('window').width;

export default class TextCustom extends React.Component {

    fontSize = (d_witdh) => {

        if (CurrentWitdh < 414 && CurrentWitdh >= 375)
            d_witdh = d_witdh - 1;
        else if (CurrentWitdh < 375 && CurrentWitdh >= 320)
            d_witdh = d_witdh - 2;
        else if (CurrentWitdh < 320)
            d_witdh = d_witdh - 3;

        return d_witdh
    }

    render() {
        return (
            <Text style={{
                fontSize: this.fontSize(this.props.fontSize),
                fontFamily: 'Helvetica Neue', color: this.props.color,
                fontWeight: this.props.bold ? this.props.bold : 'normal',
                ...this.props.style
            }} >
                {this.props.children}
            </Text>
        )
    }
}

TextCustom.propTypes = {
    fontSize: Proptypes.number.isRequired,
    color: Proptypes.string.isRequired,
    bold: Proptypes.string,
    style: Proptypes.object
}