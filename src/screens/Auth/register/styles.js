import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import Theme from "../../../res/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: Theme.light.white,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: ms(70),
    paddingBottom: ms(30),
  },
  headerTitle: {
    fontSize: ms(40),
    fontWeight: "700",
    margin: ms(2),
    color: Theme.light.primary,
  },
  headerSubTitle: {
    fontSize: ms(33),
    fontWeight: "600",
    margin: ms(2),
    color: Theme.light.primary,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: ms(35),
  },
  text: {
    color: Theme.light.lightGray,
    fontSize: ms(16),
  },
  textdark: {
    fontSize: ms(14),
  },
  link: {
    color: Theme.light.secondary,
    fontWeight: "700",
    fontSize: ms(14),
  },
  inputContainer: {
    marginVertical: ms(5),
  },
  buttonContainer: {
    marginTop: ms(30),
    marginBottom: ms(15),
  },
  formContainer: {
    marginTop: ms(10),
  },
  forgetContainer: {
    marginTop: ms(5),
    flexDirection: "row-reverse",
  },
  forgetText: {
    color: Theme.light.secondary,
    fontWeight: "700",
  },
  iconContainer: {
    marginTop: ms(10),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: ms(10),
  },
});
