import { Image, ScrollView, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import userImage from "../../../assets/images/userdp.jpg";
import styles from "./styles";
import Theme from "../../res/Theme";
import { ms } from "react-native-size-matters";
import DonutChart from "../../components/Charts/DonutChart";

const WelcomeCard = () => {
  return (
    <View style={styles.progressCard}>
      <View>
        <Text style={[styles.title, { color: Theme.light.light200 }]}>
          Progress this week
        </Text>
        <Text style={[styles.text, { color: Theme.light.light200 }]}>
          6/10 exercises completed
        </Text>
        <Text style={[styles.text, { color: Theme.light.light200 }]}>
          2/3 meals taken
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <DonutChart />
      </View>
    </View>
  );
};

const InfoCard = ({ info, value }) => {
  return (
    <View
      style={{
        borderRadius: ms(10),
        backgroundColor: Theme.light.disabled,
        width: "30%",
        height: ms(80),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#252427",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <Text style={{ marginVertical: ms(2), color: Theme.light.text }}>
        {info}:
      </Text>
      <Text
        style={{
          marginVertical: ms(2),
          fontWeight: "bold",
          fontSize: 20,
          color: Theme.light.text,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => <Image source={userImage} style={styles.logo} />,
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.text}>Welcome Back, Anas</Text>
      </View>
      <WelcomeCard />
      <View style={styles.flexContainer}>
        <InfoCard info="Height" value={`5'8"`} />
        <InfoCard info="Age" value={"23"} />
        <InfoCard info="Weight" value={"70 kg"} />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
