import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Am from './(tabs)/Am';
import Op from './(tabs)/Op';
import Att from './(tabs)/Att';
import Cp from './(tabs)/Cp';
import Es from './(tabs)/Es';
const Tn = () => {
    const Tab=createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='On-going' component={Op}/>
        <Tab.Screen name='Attendance' component={Att}/>
        <Tab.Screen name='Completed' component={Cp}/>
        <Tab.Screen name='Available Material' component={Am}/>
        <Tab.Screen name='Salary' component={Es}/>
    </Tab.Navigator>
  )
}
export default Tn