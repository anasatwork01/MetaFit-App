import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentsScreen from "../screens/Community/Comments/CommentsScreen";
import Dashboard from "../screens/Home/Dashboard";
import CalculateBmiScreen from "../screens/CalculateBmi/CalculateBmiScreen";

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="BMI Calculation" component={CalculateBmiScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
