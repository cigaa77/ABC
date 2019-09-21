import React from 'react';
import { View, Text, StyleSheet, Image, Button, PixelRatio, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import * as colors from '../assets/datas/Colors'
import * as dist from '../assets/datas/ResponseDatas'

import V_Stick from '../components/VerStick'
import H_Stick from '../components/HorStick'
import TextCustom from '../components/TextCustom'
import Space from '../components/space'
import TextBlock from '../components/TextBlock';
import ShowMore from './showMore';
import Circle from '../components/circleText';
import Agenda from './Agenda';
import Activities from './Activities';
import AddFile from './AddFile'

import { connect } from 'react-redux';
import { showMoreStatus } from '../actions/ShowMore'
import { pressTab1, pressTab2, pressTab3 } from '../actions/pressTabs';

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: colors.NAVIGATION_BACKGROUND_COLOR,
            },
            headerTintColor: colors.NAVIGATION_COLOR,
            headerRight: (
                <View style={styles.headerViewContainer}>
                    <Image style={styles.headerRightImage1} source={require('../assets/img/header/ucNokta/Group.png')} />
                    <Image style={styles.headerRightImage2} source={require('../assets/img/header/arti/Group.png')} />
                    <Image style={styles.headerRightImage3} source={require('../assets/img/header/upload/Group.png')} />
                </View>
            )
        }

    }

    componentDidMount() {
        // alert(this.props.bold[1])
    }
    renderX = (x, text, text3) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                <TextCustom fontSize={18} color={colors.NAVIGATION_COLOR}>{'{'}{x}{'}'}</TextCustom>
                <TextCustom fontSize={18} color={colors.NAVIGATION_COLOR}>{text}</TextCustom>
                {text3 && <TextCustom fontSize={18} color={colors.NAVIGATION_COLOR}>{text3}</TextCustom>}
            </View>
        )
    }
    HorizontalStick = (opacity, height = 1) => {
        return (
            <View style={styles.HorizontalStick}>
                <H_Stick height={height} opacity={opacity} color={colors.COLON3} />
            </View>
        )
    }
    touchableTabs = (press, color, text, cText = '') => {
        return (
            <TouchableWithoutFeedback onPress={press} >
                <View style={{
                    flexDirection: 'row', height: '100%', alignItems: 'center',
                    flex: 1, justifyContent: 'center'
                }}>
                    <TextCustom fontSize={16} color={color}>{text}</TextCustom>
                    {cText != '' && <Circle size={14} fontSize={12} color='#FFFFFF' backgroundColor={colors.COLOR_3} >{cText}</Circle>}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {


        return (
            <View style={{ flex: 1 }} >
                <ScrollView >

                    <View style={styles.communicationButtons}>
                        < View style={styles.viewCont}>
                            <Image style={styles.ComImage} source={require('../assets/img/communicationBar/phone/Group.png')} />
                            <TextCustom fontSize={16} color={colors.TEXT_COLOR_1} >Call</TextCustom>
                            <V_Stick height={dist.vStick} color={colors.COLON1} />
                        </View >
                        < View style={styles.viewCont}>
                            <Image style={styles.ComImage} source={require('../assets/img/communicationBar/chat/Group.png')} />
                            <TextCustom fontSize={16} color={colors.TEXT_COLOR_1} >Message</TextCustom>
                            <V_Stick height={dist.vStick} color={colors.COLON1} />
                        </View >
                        < View style={styles.viewCont}>
                            <Image style={styles.ComImage} source={require('../assets/img/communicationBar/eMail/Group.png')} />
                            <TextCustom fontSize={17} color={colors.TEXT_COLOR_1} >E-Mail</TextCustom>
                        </View >
                    </View>

                    <H_Stick height={1} color={colors.COLON1} opacity={50} />

                    <View style={styles.text_1} >
                        <TextCustom fontSize={14} color={colors.TEXT_COLOR_2} >2 months 7 days to end contract</TextCustom>
                    </View>

                    <H_Stick height={1} color={colors.COLON2} />

                    <View style={styles.profileView}>
                        <View style={{ flex: 51, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: dist.I_WITDH_1, height: dist.I_WITDH_1 }} source={require('../assets/img/profil/Oval.png')} />
                        </View>
                        <View style={{ flex: 151 }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={styles.profileText}>
                                    <TextCustom fontSize={20} color={colors.TEXT_COLOR_3}>25</TextCustom>
                                    <TextCustom fontSize={13} color={colors.TEXT_COLOR_2}>Sent</TextCustom>
                                </View>
                                <View style={styles.profileText}>
                                    <TextCustom fontSize={20} color={colors.TEXT_COLOR_3}>8</TextCustom>
                                    <TextCustom fontSize={13} color={colors.TEXT_COLOR_2}>Showing</TextCustom>
                                </View>
                                <View style={styles.profileText}>
                                    <TextCustom fontSize={20} color={colors.TEXT_COLOR_3}>3</TextCustom>
                                    <TextCustom fontSize={13} color={colors.TEXT_COLOR_2}>Offer</TextCustom>
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <View style={styles.Btn1}>
                                    <TextCustom fontSize={14} color={colors.TEXT_COLOR_1}>Add Showing</TextCustom>
                                </View>
                                <View style={styles.Btn2}>
                                    <TextCustom fontSize={14} color={colors.TEXT_COLOR_4}>Show Matchings</TextCustom>
                                    <View style={styles.AbsoluteText1}>
                                        <TextCustom color={colors.TEXT_COLOR_4} fontSize={12} >9</TextCustom>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.ViewContainer2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/img/home/Vector.png')} />
                            <Space width={dist.PADDING_2} />
                            <TextCustom color={colors.TEXT_COLOR_3} fontSize={16}>Property of Jeremy Walsh</TextCustom>
                        </View>
                        <TextCustom color={colors.TEXT_COLOR_3} fontSize={16}>€165.000</TextCustom>
                    </View>
                    <Space height={dist.H_DIST_3} />
                    <H_Stick height={1} color={colors.COLON3} />


                    <View style={{ paddingTop: dist.PADDING_4, paddingLeft: dist.PADDING_3, paddingBottom: dist.H_DIST_3 }}>
                        <TextCustom fontSize={14} color={colors.NAVIGATION_COLOR}>
                            &#123;Status{'}'} | For &#123;Selling Type{'}'} | &#123;Proprety Type{'}'}
                        </TextCustom>
                    </View>
                    {this.HorizontalStick(40)}
                    <View style={{ paddingTop: dist.H_DIST_3, paddingLeft: dist.PADDING_3, paddingBottom: dist.PADDING_6 }}>
                        <TextCustom fontSize={14} color={colors.NAVIGATION_COLOR}>
                            {'{'}Room&#125; | &#123;SurfaceArea&#125; | &#123;Bathroom&#125; | &#123;SelectedAnqituity&#125;
                        </TextCustom>
                    </View>

                    {this.HorizontalStick(40)}
                    {/* ------------------------------ */}
                    {
                        this.props.showMore &&
                        <TouchableOpacity onPress={this.props.showMoreStatus}>
                            <TextBlock align='center' pTop={dist.H_DIST_3} pBottom={dist.PADDING_7}
                                fontSize={14} color={colors.TEXT_COLOR_1}>Show More Details</TextBlock>
                        </TouchableOpacity>

                    }
                    {/* ------------------------------ */}
                    {
                        !this.props.showMore &&
                        <ShowMore />
                    }
                    {/* ------------------------------ */}
                    <H_Stick height={1} color={colors.COLON3} />

                    <View style={{ flexDirection: 'row', paddingTop: dist.PADDING_8, paddingHorizontal: dist.PADDING_9, justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row' }} >
                            <View style={styles.tags}>
                                <TextCustom fontSize={13} color={colors.NAVIGATION_COLOR} >#sample tag 2</TextCustom>
                            </View>
                            <View style={styles.tags}>
                                <TextCustom fontSize={13} color={colors.NAVIGATION_COLOR} >#sample tag 3</TextCustom>
                            </View>
                            <View style={styles.tags}>
                                <TextCustom fontSize={13} color={colors.NAVIGATION_COLOR} >#oldhome</TextCustom>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextCustom fontSize={14} color={colors.COLOR_1}>...</TextCustom>
                            <TextCustom fontSize={14} color={colors.TEXT_COLOR_1}>edit tags</TextCustom>
                        </View>
                    </View>

                    <View style={{ marginTop: 18, height: dist.I_HEIGHT_1 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/img/rectangle/Rectangle.png')} />
                        <View style={styles.ImgButon}>
                            <TextCustom fontSize={12} color={colors.TEXT_COLOR_4}>Fair Priced</TextCustom>
                        </View>
                        <Image style={{ position: 'absolute', left: dist.PADDING_5, bottom: dist.CUSTOM_2 }} source={require('../assets/img/Point/Group.png')} />
                        <View style={{ position: 'absolute', width: '100%', alignItems: 'center', bottom: dist.CUSTOM_1 }}>
                            <Image source={require('../assets/img/GroupNokta/Group.png')} />
                        </View>
                        <View style={styles.Slides}>
                            <Image source={require('../assets/img/LeftSide/LeftSlide.png')} />
                            <Image source={require('../assets/img/RightSide/RightSlide.png')} />
                        </View>
                    </View>

                    <View style={{ height: dist.HEIGHT_2, flexDirection: 'row', justifyContent: 'center' }}>
                        {this.touchableTabs(this.props.pressTab1, this.props.color[0], 'Agenda ', '9')}
                        {this.touchableTabs(this.props.pressTab2, this.props.color[1], 'Activites ', '2')}
                        {this.touchableTabs(this.props.pressTab3, this.props.color[2], 'Files')}
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: this.props.align }}>
                        <View style={{ width: dist.width / 3 }}>
                            <H_Stick height={1.5} opacity={80} color={colors.COLOR_2} />
                        </View>
                    </View>

                    <H_Stick height={0.5} opacity={50} color={colors.COLON2} />


                    {this.props.tabControl == 1 &&
                        <Agenda />
                    }
                    {this.props.tabControl == 2 &&
                        <Activities />
                    }
                    {this.props.tabControl == 3 &&
                        <AddFile />
                    }

                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    headerViewContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    headerRightImage1: {
        marginRight: dist.disItem1
    },
    headerRightImage2: {
        marginRight: dist.disItem2
    },
    headerRightImage3: {
        marginRight: dist.disItem3
    },
    communicationButtons: {
        flexDirection: 'row',
        height: dist.distCom
    },
    viewCont: {
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_1: {
        alignItems: 'center',
        justifyContent: 'center',
        height: dist.H_DIST_1
    },
    ComImage: {
        marginRight: dist.V_DIST_1
    },
    profileView: {
        height: dist.H_DIST_2,
        flexDirection: 'row'
    },
    profileText: {
        flex: 1,
        alignItems: 'center',
        marginTop: dist.MARGIN_T1
    },
    Btn1: {
        height: dist.B_HEIGHT_1,
        width: dist.B_WITDH_1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.TEXT_COLOR_1,
        borderWidth: 1,
        borderRadius: 5
    },
    Btn2: {
        height: dist.B_HEIGHT_1,
        width: dist.B_WITDH_2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.TEXT_COLOR_1,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: colors.TEXT_COLOR_1
    },
    AbsoluteText1: {
        position: 'absolute',
        backgroundColor: 'red',
        right: -dist.C_HEIGHT_1 / 2,
        top: -dist.C_HEIGHT_1 / 2,
        height: dist.C_HEIGHT_1,
        width: dist.C_HEIGHT_1,
        borderRadius: dist.C_HEIGHT_1 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: dist.PADDING_1,
        paddingRight: dist.PADDING_2
    },
    HorizontalStick: {
        paddingHorizontal: dist.PADDING_3
    },
    tags: {
        height: dist.B_HEIGHT_1,
        justifyContent: 'center',
        borderRadius: 1.7,
        marginHorizontal: dist.PADDING_10,
        paddingHorizontal: dist.PADDING_2,
        backgroundColor: colors.COLOR_1
    },
    ImgButon: {
        height: dist.PADDING_6,
        width: dist.WITDH_1,
        position: 'absolute',
        left: dist.PADDING_5,
        top: dist.CUSTOM_3,
        backgroundColor: colors.BACKGROUND_COLOR_2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Slides: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        alignItems: 'center',
        height: dist.I_HEIGHT_1,
        width: '100%'
    }
})

const mapStateToProps = (state) => {
    return {
        showMore: state.showMore,
        color: state.color,
        align: state.align,
        tabControl: state.tab
    }
}

export default connect(mapStateToProps, { showMoreStatus, pressTab1, pressTab2, pressTab3 })(HomeScreen)