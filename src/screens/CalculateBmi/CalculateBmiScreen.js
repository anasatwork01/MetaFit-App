import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../../components/UI/AppButton";
import CameraComponent from "./CameraComponent";
import Images from "../../res/Images";
import { AppText } from "../../components/UI/AppText";
import axios from "axios";

const CalculateBmiScreen = ({ navigation }) => {
  const httpClient = axios.create();

  httpClient.defaults.timeout = 50000;
  const [openCamera, setOpenCamera] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const onClickPhoto = async (photo) => {
    setPhoto(photo);
    setOpenCamera(false);
    console.log(photo);
  };

  const calculateHeight = async () => {
    try {
      setLoading(true);
      console.log(photo, "Photo");
      let formData = new FormData();
      formData.append("file", { uri: photo.uri, fileName: photo.uri });
      const height = await httpClient.post(
        "http://10.7.60.116:8000/predict-height/",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      setLoading(false);

      console.log(height);
    } catch (err) {
      setLoading(false);
      console.log(err, "errrrrr");
    }
  };

  return openCamera && !photo ? (
    <CameraComponent onClickPhoto={onClickPhoto} />
  ) : (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={
          photo
            ? { height: 500, width: 300, resizeMode: "stretch", margin: 50 }
            : { height: 300, width: 300, resizeMode: "stretch", margin: 50 }
        }
        source={photo ? { uri: photo.uri } : Images.dottedHuman}
      />
      {photo ? (
        <AppButton
          title={loading ? "Loading..." : "Calculate"}
          onPress={calculateHeight}
        />
      ) : (
        <AppButton title="Scan your Body" onPress={() => setOpenCamera(true)} />
      )}
      {!photo && (
        <AppText marginTop={50} text={"Please Take picture as shown above !"} />
      )}
    </View>
  );
};

export default CalculateBmiScreen;

const styles = StyleSheet.create({});
