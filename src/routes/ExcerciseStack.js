import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExcerciseScreen from "../screens/ExcerciseScreen/ExcerciseScreen";
import ExcerciseDetail from "../screens/ExcerciseDetail/ExcerciseDetail";

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function ExcerciseStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Excercises" component={ExcerciseScreen} />
      <Stack.Screen name="Excercise Details" component={ExcerciseDetail} />
    </Stack.Navigator>
  );
}

export default ExcerciseStack;
