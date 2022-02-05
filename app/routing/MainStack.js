import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import {RoutesList, GuestRoutes} from './routes';
import {appColors} from '../utils/appColors';
import {scale} from 'react-native-size-matters';
import TabCerator from './TabCerator';
import StackCreater from './StackCreater';
import ReduxWrapper from '../redux/ReduxWrapper';
function MainStack({auth: {token}}) {
  const routes = token
    ? [
        {
          name: 'Home',
          component: () => <TabCerator routes={[...RoutesList]} />,
          options: {
            tabBarBadge: 3,
            tabBarLabel: 'Home',
            tabBarButton: () => null,
          },
        },
      ]
    : GuestRoutes;
  return (
    <NavigationContainer>
      <StackCreater routs={[...routes]} />
    </NavigationContainer>
  );
}
export default ReduxWrapper(MainStack);
