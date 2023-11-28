import { View, Text, TouchableOpacity ,Platform} from 'react-native'
import React from 'react'
import Theme from '../../res/Theme';
import Shadow from '../../res/Shadow';
import { StyleSheet } from 'react-native';
import { ms,ScaledSheet } from "react-native-size-matters";
import { AppText } from './AppText';


const AppButton = (props) => {
    const {
        backgroundColor = Theme.light.primary,
        color = Theme.light.white,
        title = "Some Text",
        onPress,
        isLoading = false,
        borderWidth = 0,
        borderColor = Theme.light.border,
        height = ms(46),
        width = ms(150),
        marginTop,
        paddingLeft,
        paddingRight,
        buttonIcon,
        Imagesource,
        marginBottom,
        marginStart,
        marginEnd,
        marginHorizontal,
        marginVertical,
        disabled,
        disabledBg,
        borderRadius = ms(20),
        fontSize = ms(16),
        activeOpacity,
        fontFamily,
        centerPost,
      } = props;
  return (
    <TouchableOpacity style={[
      styles.btnStyle,
      {
        width: width,
        height: height,
        backgroundColor: disabled === true ? disabledBg : backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
        borderRadius: borderRadius,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        marginStart: marginStart,
        marginEnd: marginEnd,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        alignItems: centerPost ? "flex-start" : "center",
      },
    ]}
    disabled={disabled}
    onPress={onPress}
    activeOpacity={activeOpacity ? activeOpacity : 0.8}>
       <View style={{ flexDirection: "row" }}>
        {buttonIcon === true && (
          <Image
            source={Imagesource}
            style={{
              width: ms(19.88),
              height: ms(19),
              marginRight: ms(6.5),
            }}
          />
        )}

        {isLoading ? (
          <ActivityIndicator color={color} />
        ) : (
          <AppText
            text={title}
            fontWeight="semiBold"
            fontFamily={fontFamily ? fontFamily : 'Manrope-Regular'}
            color={color}
            fontSize={fontSize}
            center
            paddingBottom={Platform.OS === 'ios' ? ms(2) : ms(3)}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}


export default AppButton


const styles = ScaledSheet.create({
  btnStyle: {
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: Shadow.ios,
      android: Shadow.android,
    }),
  },
});