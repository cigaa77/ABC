import React from 'react';
import { View, Image } from 'react-native';
import TextCustom from '../components/TextCustom';
import * as colors from '../assets/datas/Colors';
import * as dist from '../assets/datas/ResponseDatas';
import H_Stick from '../components/HorStick';
import Space from '../components/space';
import TextBlock from '../components/TextBlock';

export default class Activities extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Space height={dist.HEIGHT_2} />
                <Image source={require('../assets/img/BitMap/Bitmap.png')} />
                <TextBlock pTop={dist.PADDING_6} pBottom={dist.B_HEIGHT_1}
                    fontSize={24} color={colors.NAVIGATION_COLOR}>Add Activities</TextBlock>
                <View style={{ alignItems: 'center', width: dist.WITDH_2 }}>
                    <TextCustom fontSize={14} color={colors.TEXT_COLOR_2} style={{ textAlign: 'center' }} >
                        Add your clients activities here and Aidy will keep track of all. You will no longer
                        miss a single client task or forget an activity.
                    </TextCustom>
                </View>
                <Space height={dist.H_DIST_1} />
                <H_Stick height={0.4} color={colors.COLON1} />
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={17} color={colors.TEXT_COLOR_1}>Add Task</TextBlock>
                <H_Stick height={0.4} color={colors.COLON1} />
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={17} color={colors.TEXT_COLOR_1}>Add Showing</TextBlock>
                <H_Stick height={0.5} color={colors.COLON1} />
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={17} color={colors.TEXT_COLOR_1}>Add Offer</TextBlock>
                <H_Stick height={0.4} color={colors.COLON1} />
                <Space height={dist.BOTTOM} />
            </View>
        )
    }
}