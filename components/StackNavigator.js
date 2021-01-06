import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import DonateScreen from '../screens/DonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const StackNavigator = createStackNavigator({
  DonateList : {
    screen : DonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'DonateList'
  }
);