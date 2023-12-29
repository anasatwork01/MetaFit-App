import React, { useState } from "react";
import { Pressable, Image } from "react-native";
// import ImageView from "react-native-image-viewing";
// import Image from "react-native-image-progress";
// import * as Progress from "react-native-progress";
const ImageViewer = ({ image, style }) => {
  const [visible, setIsVisible] = useState(false);
  return (
    <Pressable onPress={() => setIsVisible(true)}>
      <Image
        source={image}
        style={style}
        // imageStyle={style}
        // indicator={Progress.Circle}
        // indicatorProps={{
        //   size: 40,
        //   borderWidth: 0,
        //   color: "rgba(150, 150, 150, 1)",
        //   unfilledColor: "rgba(200, 200, 200, 0.2)",
        // }}
        resizeMode="cover"
        resizeMethod="resize"
      />
      {/* <ImageView
        visible={visible}
        images={[image]}
        imageIndex={0}
        onRequestClose={() => setIsVisible(false)}
      /> */}
    </Pressable>
  );
};

export default ImageViewer;
