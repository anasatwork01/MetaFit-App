// Libraries
import React from "react";
import ROUTES from "./route.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuStack from "./MenuStack.js";
import TabStack from "./TabStack.js";

const Stack = createNativeStackNavigator();
export const currentRouteName = React.createRef();
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const navOptionHandler = () => ({
  headerShown: false,
});

function MainStack() {
  const getCurrentRouteName = (route) => {
    if (route?.state) {
      let route2 = route?.state?.routes[route.state.index];
      if (route2?.state) {
        let routename = getFocusedRouteNameFromRoute(route2);
        if (routename) {
          currentRouteName.current = routename;
          return;
        }
      }
      currentRouteName.current = getFocusedRouteNameFromRoute(route);
      return;
    }
    currentRouteName.current = route.params?.screen || "Home";
    return;
  };

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.TAB_STACK}
      screenListeners={({ route }) => {
        getCurrentRouteName(route);
      }}
    >
      <Stack.Screen
        name={ROUTES.TAB_STACK}
        component={TabStack}
        options={navOptionHandler}
      />
      {/* <Stack.Screen
        name={ROUTES.MENU}
        component={MenuStack}
        options={navOptionHandler}
      /> */}
    </Stack.Navigator>
  );
}

export default MainStack;
