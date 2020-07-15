import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile48924Navigator from '../features/UserProfile48924/navigator';
import BlankScreen28923Navigator from '../features/BlankScreen28923/navigator';
import BlankScreen18922Navigator from '../features/BlankScreen18922/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile48924: { screen: UserProfile48924Navigator },
BlankScreen28923: { screen: BlankScreen28923Navigator },
BlankScreen18922: { screen: BlankScreen18922Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
