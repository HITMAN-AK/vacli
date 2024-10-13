import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./(tabs)/Home";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Home",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
