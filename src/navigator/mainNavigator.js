import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen58939Navigator from '../features/BlankScreen58939/navigator';
import BlankScreen18935Navigator from '../features/BlankScreen18935/navigator';
import BlankScreen28934Navigator from '../features/BlankScreen28934/navigator';
import BlankScreen68932Navigator from '../features/BlankScreen68932/navigator';
import BlankScreen18931Navigator from '../features/BlankScreen18931/navigator';
import BlankScreen58929Navigator from '../features/BlankScreen58929/navigator';
import BlankScreen18927Navigator from '../features/BlankScreen18927/navigator';
import UserProfile38925Navigator from '../features/UserProfile38925/navigator';
import BlankScreen18922Navigator from '../features/BlankScreen18922/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen58939: { screen: BlankScreen58939Navigator },
BlankScreen18935: { screen: BlankScreen18935Navigator },
BlankScreen28934: { screen: BlankScreen28934Navigator },
BlankScreen68932: { screen: BlankScreen68932Navigator },
BlankScreen18931: { screen: BlankScreen18931Navigator },
BlankScreen58929: { screen: BlankScreen58929Navigator },
BlankScreen18927: { screen: BlankScreen18927Navigator },
UserProfile38925: { screen: UserProfile38925Navigator },
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
