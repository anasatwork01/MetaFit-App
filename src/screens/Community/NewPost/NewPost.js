import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppImg from "../../../components/UI/AppImg";
import Images from "../../../res/Images";
import { TextInput } from "react-native-gesture-handler";
import { ms } from "react-native-size-matters";
import { TouchableOpacity } from "react-native";
import { Camera } from "../../../res/Icons";

const NewPost = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <AppImg
          image={Images.userImg}
          height={48}
          width={48}
          borderRadius={24}
        />
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={{ flex: 1, marginLeft: ms(20) }}
          placeholder="Want to share Something ?"
        />
      </View>
      <TouchableOpacity style={styles.photo}>
        <Camera />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    margin: ms(20),
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: ms(32),
  },
});
