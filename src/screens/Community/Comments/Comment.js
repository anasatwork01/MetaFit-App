import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../../../components/UI/AppText";
import { getTimeDifference } from "../../../helpers/date-time";
import { ms } from "react-native-size-matters";
import AppImg from "../../../components/UI/AppImg";
import Theme from "../../../res/Theme";
import Images from "../../../res/Images";

function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.postHeader}>
          <View style={styles.postUserImg}>
            <AppImg
              image={
                comment?.user_info?.avatar
                  ? { uri: comment?.user_info?.avatar }
                  : Images.userImg
              }
              width={ms(40)}
              height={ms(40)}
              resizeMode="cover"
              borderRadius={ms(10)}
            />
          </View>
          <View style={styles.postMeta}>
            <AppText
              text={comment?.user_info?.name || "Anas Khan"}
              fontSize={ms(14)}
              fontFamily="Manrope-SemiBold"
            />
          </View>
        </View>
        <AppText
          text={getTimeDifference(
            comment?.created_at || "2023-12-24T15:00:11.347+00:00"
          )}
          color={Theme.light.text}
        />
      </View>
      {/* {comment?.comment && ( */}
      <AppText
        text={
          comment?.comment ||
          "My Testing Comment which seems Fun , I hope we comment Again"
        }
        styles={styles.comment}
        fontSize={12}
        marginBottom={ms(10)}
      />
      {/* )} */}
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingBottom: ms(10),
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: ms(10),
  },
  comment: {
    marginTop: ms(5),
    textAlign: "justify",
  },
  flexView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: ms(10),
  },
  dislikeIcon: {
    marginLeft: ms(20),
  },
  mediaStyle: {
    height: ms(200),
    width: ms(200),
    borderRadius: ms(20),
    alignSelf: "center",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: ms(15),
  },
  postMeta: {
    marginLeft: ms(12),
  },
  postDropdown: {
    marginTop: ms(5),
  },
  postImg: {
    marginTop: ms(20),
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  videoIconView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  videoIcon: {
    backgroundColor: Theme.light.white,
    width: ms(40),
    height: ms(40),
    borderRadius: ms(10),
    alignItems: "center",
    justifyContent: "center",
  },
  postSocialIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: ms(12),
  },
});
