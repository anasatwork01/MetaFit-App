import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "./route";
import LoginScreen from "../screens/Auth/login/LoginScreen";
import RegisterScreen from "../screens/Auth/register/RegisterScreen";
import ForgotPasswordScreen from "../screens/Auth/forgotPassword/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
