
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import Agenda from './screens/Agenda';
import Activites from './screens/Activities';
import AddFile from './screens/AddFile'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen,
        Agenda: Agenda,
        Activites:Activites,
        AddFile:AddFile
    },
    {
        initialRouteName: 'Details'
    }
)

export default createAppContainer(AppNavigator);