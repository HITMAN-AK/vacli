import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./(tabs)/Home";
import Land from "./inits/Land"
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onGoingProject" component={Land} options={{headerTitle: "On Going Project",headerTintColor: "white",headerStyle: {backgroundColor: "black",},}}/>
        <Stack.Screen name="attendance" component={Home} options={{headerTitle: "Attendance",headerTintColor: "white",headerStyle: {backgroundColor: "black",},}}/>
        <Stack.Screen name="completedProject" component={Land} options={{headerTitle: "Completed Project",headerTintColor: "white",headerStyle: {backgroundColor: "black",},}}/>
        <Stack.Screen name="availableMaterials" component={Land} options={{headerTitle: "Available Materials",headerTintColor: "white",headerStyle: {backgroundColor: "black",},}}/>
        <Stack.Screen name="employeeSalary" component={Land} options={{headerTitle: "Employee Salary",headerTintColor: "white",headerStyle: {backgroundColor: "black",},}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
