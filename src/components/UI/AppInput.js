// Libraries
import React, { useState } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { ms, ScaledSheet } from "react-native-size-matters";

// Components
import { EyeIcon, EyeLashIcon } from "../../res/Icons";
import Theme from "../../res/Theme";

const AppInput = ({
  placeholder = "",
  onChangeText,
  secureTextEntry = false,
  value,
  keyboardType,
  editable = true,
  width = "100%",
  height = ms(47),
  maxLength,
  iconLeft,
  textcolor = Theme.light.black,
  autoCapitalize,
  backgroundColor,
  textAlign,
  placeholderTextColor,
  fontFamily,
  fontSize,
  flex,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const { inputStyles, eyeIcon } = styles;

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View
      style={{
        position: "relative",
        borderBottomWidth: 1,
        paddingRight: iconLeft ? ms(45) : ms(16),
        width: width,
        height: height,
        borderRadius: ms(10),
        justifyContent: "center",
        backgroundColor: backgroundColor ? backgroundColor : "",
        paddingBottom: 2,
        paddingLeft: ms(16),
        borderColor: Theme.light.border,
        flex: flex ? 1 : 0,
      }}
    >
      <TextInput
        style={[
          inputStyles,
          { fontFamily: fontFamily ? fontFamily : "Manrope-Regular" },
        ]}
        placeholder={placeholder}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Theme.light.lightGray
        }
        onChangeText={(text) => {
          onChangeText(text);
        }}
        secureTextEntry={secureTextEntry ? hidePassword : false}
        value={value}
        autoCorrect={false}
        keyboardType={keyboardType}
        editable={editable}
        autoFocus={false}
        color={textcolor}
        autoCapitalize={autoCapitalize}
        textAlign={textAlign}
        maxLength={maxLength ? maxLength : 1000}
        fontSize={fontSize ? fontSize : ms(12)}
      />
      {iconLeft === true && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleHidePassword}
          style={{
            position: "absolute",
            right: 0,
            marginRight: ms(12),
          }}
        >
          {hidePassword === true ? (
            <EyeLashIcon />
          ) : (
            <EyeIcon stroke="#7C7C7D" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export { AppInput };

const styles = ScaledSheet.create({
  inputStyles: {
    color: Theme.light.text,
    height: ms(40),
    // fontFamily: "Manrope-Medium",
    // fontSize: ms(12),
  },
  //   eyeIcon: {
  //     width: ms(16),
  //     height: ms(16),
  //     marginRight: ms(8),
  //   },
});
