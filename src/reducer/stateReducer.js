import * as types from '../assets/datas/ActionTypes'
import * as colors from '../assets/datas/Colors'

const INITIAL_STATE = {
    showMore: true,
    color: [colors.NAVIGATION_COLOR, colors.TEXT_COLOR_2, colors.TEXT_COLOR_2],
    align: 'flex-start',
    tab: 1
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SHOW_MORE:
            return {
                ...state,
                showMore: !state.showMore
            };
        case types.PRESS_TAB_1:
            return {
                ...state,
                color: [colors.NAVIGATION_COLOR, colors.TEXT_COLOR_2, colors.TEXT_COLOR_2], align: 'flex-start', tab: 1
            };
        case types.PRESS_TAB_2:
            return {
                ...state,
                color: [colors.TEXT_COLOR_2, colors.NAVIGATION_COLOR, colors.TEXT_COLOR_2], align: 'center', tab: 2
            };
        case types.PRESS_TAB_3:
            return {
                ...state,
                color: [colors.TEXT_COLOR_2, colors.TEXT_COLOR_2, colors.NAVIGATION_COLOR], align: 'flex-end', tab: 3
            };
        default:
            return state;
    }
}