import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/routes/AuthNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/Store/Index";
import SimpleActivityIndicator from "./src/components/UI/SimpleActivityIndicator";
import Index from "./src/routes/Index";

export default function App() {
  return (
    <Provider loading={<SimpleActivityIndicator />} store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Index />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
