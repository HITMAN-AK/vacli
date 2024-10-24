import React from "react";
import Am from "./tabs/Am";
import Op from "./tabs/Op";
import Att from "./tabs/Att";
import Cp from "./tabs/Cp";
import Es from "./tabs/Es";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Cdn from "./Cdn";
const Tn = () => {
  const Dn = createDrawerNavigator();
  return (
      <Dn.Navigator drawerContent={(props) => <Cdn {...props} />}>
        <Dn.Screen name="On-going" component={Op} />
        <Dn.Screen name="Attendance" component={Att} />
        <Dn.Screen name="Completed" component={Cp} />
        <Dn.Screen name="Available Material" component={Am} />
        <Dn.Screen name="Salary" component={Es} />
      </Dn.Navigator>
  );
};
export default Tn;
