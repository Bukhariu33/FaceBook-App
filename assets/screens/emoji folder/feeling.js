import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Felt from './felt';
import Activity from './activity';

const FeelingTab = createMaterialTopTabNavigator();

export default function Feeling() {
  return (
    <NavigationContainer independent={true}>
      <FeelingTab.Navigator>
        <FeelingTab.Screen name="Feelings" component={Felt} />
        <FeelingTab.Screen name="Activities" component={Activity} />
      </FeelingTab.Navigator>
    </NavigationContainer>
  );
}
