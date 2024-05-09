import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import MainStack from "./mainStack";
import SimpleActivityIndicator from "../components/UI/SimpleActivityIndicator";

function Index() {
  const auth = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.appconfig.isloading);
  return (
    <>
      {loading && <SimpleActivityIndicator />}
      {auth.isAuthenticated ? <MainStack /> : <AuthNavigator />}
      {/* <AuthNavigator /> */}
    </>
  );
}

export default Index;
