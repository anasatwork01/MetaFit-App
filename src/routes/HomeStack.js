import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentsScreen from "../screens/Community/Comments/CommentsScreen";
import Dashboard from "../screens/Home/Dashboard";

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {/* <Stack.Screen name="Comments" component={CommentsScreen} /> */}
      {/* <Stack.Screen
        name="Playback"
        component={Playback}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Post Details"
        component={PostDetails}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="User Profile"
        component={UserProfile}
        options={navOptionHandler}
      /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
