import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNav from './BottomTabNav'
//import Loading from '../screens/LoadingScreen'
//import Home from '../screens/Home'
import Add from '../screens/Add'
import Edit from '../screens/Edit'

const RootNavigator = createStackNavigator({
    BottomTabNav: {
        screen: BottomTabNav,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    //   Login: {
    //     screen: Login,
    //     navigationOptions: ({ navigation }) => ({
    //       header: null
    //     }),
    //   },
    Add: {
        screen: Add,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Edit: {
        screen: Edit,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
//   StackNavigator:{
//     screen: StackNavigator,
//   navigationOptions: ({ navigation }) => ({
//     header: null
//   })
// }
},
{
        headerMode: 'none',
        mode: 'modal',
        transparentCard: true,
        cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99
        },
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true,
            },
        },

    });
export default createAppContainer(RootNavigator);
