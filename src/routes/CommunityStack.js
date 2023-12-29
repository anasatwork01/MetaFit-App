import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import CommunityScreen from "../screens/Community/CommunityScreen";
import CommentsScreen from "../screens/Community/Comments/CommentsScreen";
import NewPost from "../screens/Community/NewPost/NewPost";

const Stack = createNativeStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function CommunityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={CommunityScreen}
        // options={navOptionHandler}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="New Post" component={NewPost} />

      {/* 
      <Stack.Screen
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

export default CommunityStack;
