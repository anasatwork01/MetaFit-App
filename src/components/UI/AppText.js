// Libraries
import React from "react";
import { Text } from "react-native";
import Theme from "../../res/Theme";

const AppText = ({
    text,
    color = Theme.light.lightGray,
    fontSize,
    fontWeight,
    center,
    transform,
    numberOfLines,
    onPress,
    marginTop,
    marginBottom,
    marginStart,
    marginEnd,
    backgroundColor,
    styles,
    ...props
}) => {

    return (
        <Text
            numberOfLines={numberOfLines}
            onPress={onPress}
            style={[
                styles,
                {
                    color: color,
                    backgroundColor: backgroundColor,
                    marginTop: marginTop,
                    marginBottom: marginBottom,
                    marginStart: marginStart,
                    marginEnd: marginEnd,
                    fontSize: fontSize,
                    fontFamily: fontWeight === "semiBold" ? "Manrope-SemiBold" : "Manrope-Regular",
                    textTransform: transform === "uppercase" ? "uppercase" : "none",
                    textAlign: center ? "center" : "auto",
                    ...props,
                },
            ]}
        >
            {text}
        </Text>
    );
};

export { AppText };