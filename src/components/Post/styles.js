import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";

export default StyleSheet.create({
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
  moreBtn: {
    padding: ms(5),
  },
  postImg: {
    marginTop: ms(20),
    flexDirection: "row",
    justifyContent: "center",
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
  postView: {
    width: "100%",
  },
  overLay: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: ms(16),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
