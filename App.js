
import React from 'react';
import NavAppContainer from './src/NavAppContainer';
import { SafeAreaView } from 'react-navigation';
import { createStore } from 'redux';
import reducer from './src/reducer/stateReducer';
import { Provider } from 'react-redux'

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

