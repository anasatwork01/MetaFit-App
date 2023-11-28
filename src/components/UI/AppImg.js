// Libraries
import { Image } from "react-native";
import React from "react";
import Images from "../../res/Images";
export default AppImg = ({
  image: imageProp,
  width,
  height,
  borderRadius,
  resizeMode,
  margin,
  mainResizemode = "contain",
  fallback = Images.missingImage,
}) => {
  const [image, setImage] = React.useState(imageProp);
  return (
    <Image
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        resizeMode: resizeMode,
        margin: margin,
      }}
      source={image}
      onError={() => setImage(fallback)}
      resizeMode={mainResizemode}
    />
  );
};
