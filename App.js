import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tn from "./Tn";
import Log from "./tabs/Log";
import Pr from "./tabs/Pr";
import Topn from "./Topn";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pr"
          component={Pr}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VELX"
          component={Log}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />
        <Stack.Screen
          name="tab"
          component={Tn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Site"
          component={Topn}
          options={{
            headerBackTitle:"Back",
            headerBackTitleStyle:{
              color:"red"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
