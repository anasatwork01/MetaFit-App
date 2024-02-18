import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";

export default StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    borderRadius: "50%",
  },

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: ms(20),
    fontWeight: "bold",
    marginVertical: ms(5),
  },

  text: {
    fontSize: ms(15),
    marginVertical: ms(5),
    color: Theme.light.text,
  },

  progressCard: {
    marginTop: ms(25),
    padding: ms(10),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Theme.light.primary,
    borderRadius: ms(10),
  },

  flexContainer: {
    marginVertical: ms(20),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
