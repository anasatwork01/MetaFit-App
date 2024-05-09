import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import food from "../../../assets/images/food.jpg";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import AppButton from "../../components/UI/AppButton";

const MealDetail = () => {
  const selectedRecipe = {
    name: "Baked Sweet Potato with Black Bean Salsa",
    calories: 350,
    protein: 10,
    fats: 5,
    carbs: 70,
    recipe: [
      "Bake sweet potatoes in the oven until tender.",
      "Mix black beans, corn, diced tomatoes, red onion, cilantro, lime juice, and cumin to make salsa.",
      "Serve sweet potatoes topped with black bean salsa and a dollop of Greek yogurt.",
    ],
    image: food,
  };
  return (
    <View>
      <Image
        source={food}
        style={{ height: ms(200), alignSelf: "center", width: "100%" }}
      />
      <ScrollView style={{ padding: 20 }}>
        <View style={{ alignItems: "center", padding: 10 }}>
          <Text
            style={{
              color: Theme.light.primary,
              fontWeight: "bold",
              fontSize: ms(15),
            }}
          >
            {selectedRecipe.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: ms(10),
          }}
        >
          <View>
            <Text style={{ color: Theme.light.text }}>
              Calories: <Text>{selectedRecipe.calories}</Text>
            </Text>
            <Text style={{ color: Theme.light.text }}>
              Proteins: <Text>{selectedRecipe.protein}</Text>
            </Text>
          </View>
          <View>
            <Text style={{ color: Theme.light.text }}>
              Fats: <Text>{selectedRecipe.fats}</Text>
            </Text>
            <Text style={{ color: Theme.light.text }}>
              Carbs: <Text>{selectedRecipe.carbs}</Text>
            </Text>
          </View>
        </View>
        <View>
          <View style={{ alignItems: "center", padding: 10 }}>
            <Text
              style={{
                color: Theme.light.primary,
                fontWeight: "bold",
                fontSize: ms(15),
              }}
            >
              Recipe
            </Text>
          </View>
          {selectedRecipe.recipe.map((item, index) => (
            <View style={{ marginVertical: ms(5) }}>
              <Text style={{ color: Theme.light.text }}>{`${
                index + 1
              }:  ${item}`}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginVertical: ms(30),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppButton title="Select this Meal" />
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetail;
