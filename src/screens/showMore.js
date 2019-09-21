import React, { Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native'
import H_Stick from '../components/HorStick'
import TextCustom from '../components/TextCustom'
import TextBlock from '../components/TextBlock';
import * as colors from '../assets/datas/Colors'
import * as dist from '../assets/datas/ResponseDatas';
import { connect } from 'react-redux';
import { showMoreStatus } from '../actions/ShowMore'



class ShowMore extends React.Component {
    HorizontalStick = (opacity) => {
        return (
            <View style={{ paddingHorizontal: dist.PADDING_3 }}>
                <H_Stick height={1} opacity={opacity} color={colors.COLON3} />
            </View>
        )
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
    render() {
        return (
            <Fragment>
                <TextBlock align='center' pTop={dist.PADDING_8} pBottom={dist.B_HEIGHT_1}
                    fontSize={14} color={colors.TEXT_COLOR_1}>Edit Property Details</TextBlock>

                <View style={{
                    paddingTop: dist.PADDING_8, paddingBottom: dist.PADDING_8,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    {this.renderX('X', 'Partking Lot')}
                    {this.renderX('X', 'WC Number')}
                </View>

                {this.HorizontalStick(40)}

                <View style={{
                    paddingTop: dist.PADDING_8, paddingBottom: dist.PADDING_11, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    {this.renderX('X', 'Property', 'Floor')}
                    {this.renderX('X', 'Total Building', 'Floor')}
                </View>

                {this.HorizontalStick()}

                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Heating: &#123;Heating Option&#125;</TextBlock>

                {this.HorizontalStick()}

                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>In Site: Yes | No</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Furnished: Yes | No</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Loan Status: Yes | No</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Min Carpet Area: &#123;MinCarpetArea&#125;</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>View Side: &#123;Selection1&#125;,&#123;Selection2&#125;</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Max Maintenance Fee: &#123;XYZ&#125; &#123;Currency&#125;</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Swap Status: Yes | No</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Using Status: &#123;Selection&#125;</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_12}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Description</TextBlock>

                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={dist.PADDING_11}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Indoor Features: [Selected Feature Name]</TextBlock>
                {this.HorizontalStick()}
                <TextBlock pTop={dist.PADDING_11} pBottom={0}
                    fontSize={14} color={colors.NAVIGATION_COLOR}>Outdoor Features: [Selected Feature Name]</TextBlock>
                <TouchableOpacity onPress={this.props.showMoreStatus}>
                    <TextBlock align='center' pTop={dist.PADDING_8} pBottom={dist.PADDING_8}
                        fontSize={14} color={colors.TEXT_COLOR_1}>Show Less Details</TextBlock>
                </TouchableOpacity>
            </Fragment>
        )
    }
}

export default connect(null, { showMoreStatus })(ShowMore)