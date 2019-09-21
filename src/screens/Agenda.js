import React, { Fragment } from 'react';
import { View, Image, ScrollView } from 'react-native';
import TextCustom from '../components/TextCustom';
import * as colors from '../assets/datas/Colors';
import * as dist from '../assets/datas/ResponseDatas';
import H_Stick from '../components/HorStick';
import C_Text from '../components/circleText';
import C_Buton from '../components/Buton';
import Space from '../components/space';
import { AgendaItem } from '../assets/datas/agendaItem'

class Agenda extends React.Component {

    renderItem = (item) => {
        return (

            <View style={{ flexDirection: 'row', paddingLeft: dist.disItem1, paddingRight: dist.PADDING_9 }}>

                <View style={{ marginRight: dist.PADDING_R_8, marginTop: dist.PADDING_6, alignItems: 'center' }} >
                    <Image source={item.source} />
                </View>

                <View style={{ flex: 1, marginTop: dist.MARGIN_T1 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TextCustom fontSize={14} bold='bold' color={colors.NAVIGATION_COLOR}>{item.text1}</TextCustom>
                        {item.circle &&
                            <C_Text size={dist.PADDING_8} backgroundColor={colors.COLOR_3} />
                        }
                        {item.time == 1 &&
                            <View style={{ position: 'absolute', right: 0 }}>
                                <TextCustom fontSize={12} color={colors.TEXT_COLOR_2}>{item.text2}</TextCustom>
                            </View>
                        }
                    </View>

                    <View style={{ paddingTop: dist.H_DIST_3 }}>
                        <TextCustom fontSize={14} color={colors.NAVIGATION_COLOR} >{item.text3}
                            {item.textExtra &&
                                <TextCustom fontSize={14} color={colors.TEXT_COLOR_1} >{item.textExtra}</TextCustom>
                            }
                        </TextCustom>
                    </View>

                    {(item.source2 || item.text4) &&
                        <View style={{ paddingTop: dist.PADDING_6 }}>
                            {item.source2 != null &&
                                <Image style={{ paddingBottom: dist.PADDING_11 }} source={item.source2} />
                            }
                            {item.text4 != null &&
                                <TextCustom fontSize={16} color={colors.NAVIGATION_COLOR} >{item.text4}</TextCustom>
                            }
                        </View>
                    }

                    {item.text5 != null &&
                        <View style={{ paddingTop: dist.PADDING_13 }}>
                            <TextCustom fontSize={14} color={colors.TEXT_COLOR_2} >{item.text5}</TextCustom>
                        </View>
                    }


                    <View style={{ paddingTop: dist.PADDING_6, flexDirection: 'row' }}>
                        <C_Buton borderColor={item.color1} height={dist.B_HEIGHT_1} width={dist.WITDH_1} backgroundColor={item.color1}
                            fontSize={14} textColor={item.color2}>{item.text6}</C_Buton>
                        <Space width={dist.PADDING_2} />
                        <C_Buton borderColor={item.color1} height={dist.B_HEIGHT_1} width={dist.I_WITDH_1} backgroundColor={item.color2}
                            fontSize={14} textColor={item.color1}>{item.text7}</C_Buton>
                        <Space width={dist.PADDING_2 - 1} />

                        {item.time == 2 &&
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                                <TextCustom fontSize={12} color={colors.TEXT_COLOR_2}>{item.text2}</TextCustom>
                            </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
    renderHeader = (fSize, text1, text2) => {
        return (
            <View style={{ flexDirection: 'row', paddingTop: dist.PADDING_6, paddingBottom: dist.PADDING_13, paddingLeft: dist.disItem1, paddingRight: dist.PADDING_9 }}>
                <TextCustom fontSize={fSize} bold='bold' color={colors.NAVIGATION_COLOR}>{text1} </TextCustom>
                <TextCustom fontSize={fSize} color={colors.NAVIGATION_COLOR}>{text2}</TextCustom>
            </View>
        )
    }
    render() {
        return (
            <View style={{}}>

                {this.renderHeader(16, 'Client Requests', '(1)')}
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item1)}
                <Space height={dist.PADDING_6} />
                {this.renderHeader(16, 'Suggestions', '(2)')}
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item2)}
                <Space height={dist.PADDING_6} />
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item3)}
                <Space height={dist.PADDING_6} />
                {this.renderHeader(14, 'Snoozed', '(1)')}
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item4)}
                <Space height={dist.PADDING_6} />
                {this.renderHeader(14, 'Past', '(2)')}
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item5)}
                <Space height={dist.PADDING_6} />
                <H_Stick color={colors.COLON3} height={0.5} opacity={40} />
                {this.renderItem(AgendaItem.Item6)}


                <Space height={dist.BOTTOM} />
            </View>
        )
    }
}

export default Agenda;