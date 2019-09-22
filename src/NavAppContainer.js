import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerBackTitle:null
        }
    }
)

export default createAppContainer(AppNavigator);