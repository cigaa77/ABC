import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

export default class Space extends React.Component {
    render() {
        return (
            <View style={{
                height: this.props.height ? this.props.height : 0,
                width: this.props.width ? this.props.width : 0
            }} />
        )
    }
}

Space.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number
}