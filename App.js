import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { createStore } from 'redux';
import NavAppContainer from './src/NavAppContainer';
import { Provider } from 'react-redux'
import reducer from './src/reducer/stateReducer';

const store = createStore(reducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView forceInset={{ top: 'never', bottom: 'always' }} style={{ flex: 1 }}>
                    <NavAppContainer />
                </SafeAreaView>
            </Provider>
        )
    }
}

