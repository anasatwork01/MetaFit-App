// Libraries
import { View, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
// Components
import Shadow from "../../res/Shadow";
import Theme from "../../res/Theme";

const ShadowCard = (props) => {
  return (
    <View
      style={[
        styles.cardStyle,
        {
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : Theme.light.white,
          width: props.width,
          height: props.height,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          paddingHorizontal: props.paddingHorizontal,
          paddingVertical: props.paddingVertical,
          borderRadius: props.borderRadius,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
          paddingStart: props.paddingStart,
          paddingEnd: props.paddingEnd,
          position: props.position,
          display: props.flex && "flex",
          flexDirection: props.flex ? "row" : "column",
          alignItems: props.flex ? "center" : "flex-start",
          justifyContent: props.flex ? "center" : "flex-start",
        },
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = ScaledSheet.create({
  cardStyle: {
    ...Platform.select({
      ios: Shadow.ios,
      android: Shadow.android,
    }),
  },
});

export { ShadowCard };
