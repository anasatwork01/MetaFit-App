// Libraries
import React, { useEffect } from "react";
import { ms } from "react-native-size-matters";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, View } from "react-native";
import AppImg from "../components/UI/AppImg";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { HeaderRightIcons } from "../components/UI/HeaderRightIcons";
// import MessengerStack from "./MessengerStack";
// import { connectSocket, socket } from "../Helpers/socket";
// import ReportUser from "../components/ReportUser/ReportUser";
// import ShareBottomSheet from "../components/ShareBottomSheet/ShareBottomSheet";
// import PostActions from "../components/PostActions/PostActions";
import {
  CommunityIcon,
  CommunityIconActive,
  FoodIcon,
  FoodIconActive,
  GymIcon,
  GymIconActive,
  HomeIcon,
  HomeIconActive,
  ProfileIcon,
  ProfileIconActive,
} from "../res/Icons";
import CommunityStack from "./CommunityStack.js";
import Theme from "../res/Theme.js";
import HomeStack from "./HomeStack.js";
import Profile from "../screens/Profile/Profile.js";

const Tab = createBottomTabNavigator();

let tabBarStyle = {
  height: ms(65),
  backgroundColor: Theme.light.light200,
  paddingTop: Platform.OS === "ios" ? ms(14) : ms(0),
  borderTopLeftRadius: ms(20),
  borderTopRightRadius: ms(20),
};

function TabStack() {
  return (
    <BottomSheetModalProvider>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = focused ? <HomeIconActive /> : <HomeIcon />;
            } else if (route.name === "Exercises") {
              iconName = focused ? <GymIconActive /> : <GymIcon />;
            } else if (route.name === "Diet") {
              iconName = focused ? <FoodIconActive /> : <FoodIcon />;
            } else if (route.name === "CommunityStack") {
              iconName = focused ? <CommunityIconActive /> : <CommunityIcon />;
            } else if (route.name === "Profile") {
              iconName = focused ? <ProfileIconActive /> : <ProfileIcon />;
            }
            return iconName;
          },
          tabBarIconStyle: { width: ms(26), height: ms(26) },
          tabBarShowLabel: false,
          tabBarStyle: tabBarStyle,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: Theme.light.dark,
          headerTitleStyle: {
            fontSize: ms(24),
            fontFamily: "Manrope-SemiBold",
          },
          headerShadowVisible: false,
          // headerRight: () => (
          //   <HeaderRightIcons
          //     stroke={Theme.light.colors.dark}
          //     fill={Theme.light.colors.dark}
          //     nativeRoute="tabStack"
          //   />
          // ),
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
          // options={({ route }) => {
          //   return {
          //     tabBarStyle: shouldDisplay(getFocusedRouteNameFromRoute(route))
          //       ? tabBarStyle
          //       : { display: "none" },

          //     headerShown: shouldDisplay(getFocusedRouteNameFromRoute(route)),
          //     headerTitle: "",
          //     headerLeft: shouldDisplay(getFocusedRouteNameFromRoute(route))
          //       ? () => (
          //           <View style={{ marginLeft: ms(13) }}>
          //             <AppImg
          //               image={Images.logoGolden}
          //               width={ms(90)}
          //               height={24}
          //               resizeMode="contain"
          //             />
          //           </View>
          //         )
          //       : null,
          //   };
          // }}
        />
        <Tab.Screen
          name="Exercises"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Diet"
          component={HomeStack}
          options={{ headerShown: false }}
          // options={({ route }) => {
          //   return {
          //     tabBarStyle: shouldDisplay(getFocusedRouteNameFromRoute(route))
          //       ? tabBarStyle
          //       : { display: "none" },
          //     headerShown: shouldDisplay(getFocusedRouteNameFromRoute(route)),
          //     headerTitleAlign: "start",
          //   };
          // }}
        />
        <Tab.Screen
          name="CommunityStack"
          component={CommunityStack}
          options={({ route }) => {
            return {
              //   tabBarStyle: shouldDisplay(getFocusedRouteNameFromRoute(route))
              //     ? tabBarStyle
              //     : { display: "none" },
              headerShown: false,
            };
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => {
            return {
              //   tabBarStyle: shouldDisplay(getFocusedRouteNameFromRoute(route))
              //     ? tabBarStyle
              //     : { display: "none" },
              headerShown: true,
            };
          }}
        />
      </Tab.Navigator>
    </BottomSheetModalProvider>
  );
}

export default TabStack;
