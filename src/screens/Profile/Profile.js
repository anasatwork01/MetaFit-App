import React from "react";
import { Button, View } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/auth-slice";

const Profile = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <View>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default Profile;
