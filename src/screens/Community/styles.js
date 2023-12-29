import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Theme.light.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    // paddingTop: ms(20),
  },
  flexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  bottomSheet: {
    flex: 1,
    paddingHorizontal: ms(20),
    marginTop: ms(5),
  },
  cardRight: {
    marginRight: ms(5),
    alignItems: "center",
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: ms(20),
  },
  btnViews: {
    padding: ms(20),
  },
  flexView: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightView: {
    paddingLeft: ms(13),
  },
});
