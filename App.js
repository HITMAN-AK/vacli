import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tn from "./Tn";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tab" component={Tn} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
