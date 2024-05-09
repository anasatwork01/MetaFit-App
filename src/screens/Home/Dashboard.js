import { Button, Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import userImage from "../../../assets/images/userdp.jpg";
import styles from "./styles";
import Theme from "../../res/Theme";
import { ms } from "react-native-size-matters";
import DonutChart from "../../components/Charts/DonutChart";
import AppButton from "../../components/UI/AppButton";
import BarChart from "../../components/Charts/BarChart";

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
        padding: ms(15),
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

export const CalorieCard = ({ type, percentage, width = "45%" }) => {
  var colorBg;
  var color;
  if (type === "Burnt") {
    colorBg = "rgba(255, 99, 71,0.2)";
    color = "#ff6347";
  } else if (type === "Intake") {
    colorBg = "rgba(90, 184, 90,0.2)";
    color = "#5ab85a";
  } else {
    color = Theme.light.secondary;
  }

  return (
    <View
      style={{
        borderRadius: ms(10),
        backgroundColor: colorBg,
        width: width,
        padding: ms(10),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#252427",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <View style={{ marginVertical: ms(5) }}>
        <Text style={{ color, fontWeight: "bold" }}>{`Calorie ${type}`}</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: ms(5),
        }}
      >
        <DonutChart color={color} percentage={percentage} />
      </View>
    </View>
  );
};

const Dashboard = ({ navigation }) => {
  const BmiCard = ({ bmi }) => {
    var classification = "";
    if (bmi < 18.5) {
      classification = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      classification = "Healthy";
    } else if (bmi >= 25 && bmi < 29.9) {
      classification = "Overweight";
    } else if (bmi >= 30) {
      classification = "Obese";
    }

    return (
      <View
        style={{
          backgroundColor: "rgba(251, 188, 5,0.2)",
          borderRadius: ms(10),
          padding: ms(20),
          shadowColor: "#252427",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <View>
          <Text
            style={{
              // color: "rgb(251,188,5)",
              color: "#fb7005",
              fontSize: ms(15),
              fontWeight: "800",
            }}
          >
            BMI: {bmi}
          </Text>
          <Text
            style={{
              color: "rgb(251,188,5)",
              fontSize: ms(20),
              fontWeight: "bold",
            }}
          >
            {classification}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("BMI Calculation");
          }}
        >
          <View
            style={{
              backgroundColor: "#fb9005",
              backgroundColor: "rgb(251,188,5)",
              borderRadius: ms(10),
              padding: ms(15),
            }}
          >
            <Text style={{ color: "#fb7005", fontWeight: "700" }}>
              Calculate
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

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
      <View>
        <View style={styles.flexContainer}>
          <InfoCard info="Height" value={`5'8"`} />
          <InfoCard info="Age" value={"23"} />
          <InfoCard info="Weight" value={"70 kg"} />
        </View>
        <BmiCard bmi={30} />
      </View>
      <View style={styles.flexContainer}>
        <CalorieCard type={"Burnt"} percentage={75} />
        <CalorieCard type={"Intake"} percentage={60} />
      </View>
      <View>
        <Text style={[styles.text, { fontSize: ms(18) }]}>Weekly Progress</Text>
        <BarChart />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
