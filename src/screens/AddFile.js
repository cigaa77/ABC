import React, { Fragment } from 'react';
import { View, StyleSheet, Image } from 'react-native'

import * as colors from '../assets/datas/Colors'
import * as dist from '../assets/datas/ResponseDatas'
import H_Stick from '../components/HorStick'
import TextCustom from '../components/TextCustom'
import Space from '../components/space'
import { addFile } from '../assets/datas/addFileData'

export default class AddFile extends React.Component {
    Text = (size, text, color, bold = 'normal') => {
        return (
            <Fragment>
                <TextCustom fontSize={size} color={color} bold={bold}>{text}</TextCustom>
            </Fragment>
        )
    }
    renderItem = (item) => {
        return (
            <Fragment>
                {item.text1 != '' &&
                    <View style={[styles.padding, { alignItems: 'flex-start' }]}>
                        {this.Text(16, item.text1, colors.NAVIGATION_COLOR, 'bold')}
                    </View>
                }
                <View style={[styles.padding, { paddingTop: item.paddingTop, paddingBottom: item.paddingBottom, flexDirection: 'row' }]}>

                    <View style={{ paddingHorizontal: 4 }}>
                        <Image source={item.source} />
                    </View>

                    <View style={{ paddingLeft: 14, justifyContent: 'space-between', flex: 1 }}>

                        <View style={{ alignItems: 'flex-start' }}>
                            {this.Text(14, item.text2, colors.NAVIGATION_COLOR)}
                        </View>

                        <View style={{ alignItems: 'flex-end' }}>
                            {this.Text(14, 'delete', colors.TEXT_COLOR_1)}
                        </View>

                    </View>

                </View>
            </Fragment>
        )
    }
    render() {
        return (
            <Fragment>
                <View style={[styles.padding, { alignItems: 'flex-end', paddingTop: 16 }]}>
                    {this.Text(14, 'Add File', colors.TEXT_COLOR_1)}
                </View>

                {this.renderItem(addFile.item1)}
                <H_Stick height={1} color={colors.COLON2} />
                <Space height={18} />
                {this.renderItem(addFile.item2)}
                <View style={styles.padding}>
                    <H_Stick height={1} opacity={25} color={colors.COLON2} />
                </View>
                {this.renderItem(addFile.item3)}
                <View style={styles.padding}>
                    <H_Stick height={1} opacity={25} color={colors.COLON2} />
                </View>
                <Space height={dist.BOTTOM} />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    padding: {
        paddingLeft: 22,
        paddingRight: 23
    }
})