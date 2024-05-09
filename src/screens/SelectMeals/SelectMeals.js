import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import food from "../../../assets/images/food.jpg";
import ob from "../../../assets/images/ob.jpg";
import gy from "../../../assets/images/gy.jpg";
import bb from "../../../assets/images/bb.jpg";
import lh from "../../../assets/images/lh.jpg";
import { ms } from "react-native-size-matters";
import Theme from "../../res/Theme";
import { useNavigation } from "@react-navigation/native";

const breakfastRecipes = [
  {
    name: "Oatmeal with Berries and Nuts",
    calories: 300,
    protein: 8,
    fats: 8,
    carbs: 40,
    recipe: [
      "Cook 1/2 cup of oats in water or milk.",
      "Top with a handful of mixed berries (like strawberries, blueberries, raspberries) and a sprinkle of chopped nuts (such as almonds or walnuts).",
    ],
    image: ob,
  },
  {
    name: "Greek Yogurt Parfait",
    calories: 250,
    protein: 15,
    fats: 5,
    carbs: 30,
    recipe: [
      "Layer 1 cup of Greek yogurt with 1/4 cup of granola and sliced fruits like bananas or peaches.",
    ],
    image: gy,
  },
  {
    name: "Egg White Veggie Omelette",
    calories: 250,
    protein: 20,
    fats: 10,
    carbs: 10,
    recipe: [
      "Whisk 3 egg whites with salt and pepper.",
      "Cook in a non-stick pan, adding diced veggies like spinach, bell peppers, and tomatoes.",
      "Fold over and serve with a side of whole grain toast.",
    ],
    image: food,
  },
  {
    name: "Whole Grain Toast with Avocado and Poached Egg",
    calories: 300,
    protein: 10,
    fats: 15,
    carbs: 25,
    recipe: [
      "Toast 2 slices of whole grain bread.",
      "Spread mashed avocado on the toast.",
      "Top with a poached egg and sprinkle with salt, pepper, and red pepper flakes.",
    ],
    image: food,
  },
  {
    name: "Smoothie with Spinach, Banana, and Protein Powder",
    calories: 300,
    protein: 20,
    fats: 5,
    carbs: 40,
    recipe: [
      "Blend 1 cup of spinach, 1 ripe banana, 1 scoop of protein powder, and 1 cup of almond milk until smooth.",
      "Optional: add a tablespoon of nut butter for extra creaminess.",
    ],
    image: food,
  },
  {
    name: "Cottage Cheese with Fruit and Almonds",
    calories: 250,
    protein: 20,
    fats: 10,
    carbs: 20,
    recipe: [
      "Serve 1 cup of cottage cheese with a mix of your favorite fruits (such as pineapple chunks, grapes, or sliced kiwi).",
      "Sprinkle with sliced almonds for added crunch.",
    ],
    image: food,
  },
  {
    name: "Whole Grain Pancakes with Maple Syrup and Greek Yogurt",
    calories: 300,
    protein: 10,
    fats: 8,
    carbs: 40,
    recipe: [
      "Make pancakes using whole grain pancake mix.",
      "Top with a drizzle of maple syrup and a dollop of Greek yogurt.",
      "Optional: add sliced bananas or berries on top.",
    ],
    image: food,
  },
];

const lunchRecipes = [
  {
    name: "Grilled Chicken Salad",
    calories: 300,
    protein: 25,
    fats: 10,
    carbs: 20,
    recipe: [
      "Take Grilled chicken breast slices.",
      "Mix greens (lettuce, spinach, arugula), cherry tomatoes, Cucumber slices, Bell pepper strips and chicken together.",
    ],
    image: food,
  },
  {
    name: "Quinoa and Black Bean Bowl",
    calories: 350,
    protein: 15,
    fats: 10,
    carbs: 45,
    recipe: [
      "Mix Cooked quinoa, Black beans, Diced avocado, Diced tomatoes, Sliced jalapenos (optional) together in a bowl.",
      "Add Lime vinaigrette dressing to this mixture.",
    ],
    image: bb,
  },
  {
    name: "White Bean Salad",
    calories: 300,
    protein: 20,
    fats: 10,
    carbs: 25,
    recipe: [
      "Add White beans, Chopped celery, Red onion slices, Fresh parsley and Lemon juice in a bowl.",
      "Add olive oil dressing and mix them well together.",
    ],
    image: food,
  },
  {
    name: "Turkey and Hummus Wrap",
    calories: 350,
    protein: 20,
    fats: 10,
    carbs: 35,
    recipe: [
      "Take a whole wheat tortilla and lay it flat on a clean surface.",
      "Spread a layer of hummus evenly across the tortilla, leaving about an inch border around the edges.",
      "Place 3-4 slices of turkey breast on top of the hummus, covering the surface of the tortilla.",
      "Carefully roll the tortilla tightly from one end to the other, ensuring all the filling stays inside.",
    ],
    image: food,
  },
  {
    name: "Lentil and Vegetable Soup",
    calories: 250,
    protein: 10,
    fats: 5,
    carbs: 40,
    recipe: [
      "Heat olive oil in a large pot over medium heat.",
      "Add chopped onions, carrots, and celery. Cook until softened, about 5 minutes.",
      "Stir in minced garlic and cook for another minute.",
      "Add rinsed lentils, diced tomatoes, and vegetable broth to the pot.",
      "Season with salt, pepper, and your choice of herbs (such as thyme or bay leaves).",
      "Bring the soup to a boil, then reduce heat and let it simmer for about 20-25 minutes, until lentils are tender, and cook for another 5 minutes.",
    ],
    image: food,
  },
  {
    name: "Veggie Stir-Fry with Tofu",
    calories: 300,
    protein: 15,
    fats: 10,
    carbs: 35,
    recipe: [
      "Heat oil in a large skillet or wok over medium-high heat.",
      "Add tofu cubes and cook until golden brown on all sides, about 5-7 minutes. Remove from skillet and set aside.",
      "In the same skillet, add a bit more oil if needed.",
      "Add minced garlic and ginger, sauté for 30 seconds until fragrant.",
      "Add chopped vegetables to the skillet and stir-fry for about 5-7 minutes until tender-crisp.",
      "Return the cooked tofu to the skillet with the vegetables.",
      "Stir to combine and cook for an additional 2-3 minutes to heat through.",
      "Season the stir-fry with soy sauce, salt, and pepper to taste.",
    ],
    image: food,
  },
];

const dinnerRecipes = [
  {
    name: "Baked Lemon Herb Chicken Breast",
    calories: 350,
    protein: 30,
    fats: 10,
    carbs: 20,
    recipe: [
      "Season chicken breast with herbs, lemon juice, salt, and pepper.",
      "Bake in the oven at 375°F (190°C) for 25-30 minutes until cooked through.",
      "Serve with steamed vegetables and quinoa.",
    ],
    image: lh,
  },
  {
    name: "Grilled Salmon with Asparagus and Brown Rice",
    calories: 400,
    protein: 25,
    fats: 20,
    carbs: 30,
    recipe: [
      "Season salmon fillet with olive oil, lemon juice, garlic, salt, and pepper.",
      "Grill until salmon is cooked through, about 4-5 minutes per side.",
      "Grill asparagus spears until tender.",
      "Serve with cooked brown rice.",
    ],
    image: food,
  },
  {
    name: "Vegetarian Lentil Chili",
    calories: 300,
    protein: 15,
    fats: 5,
    carbs: 45,
    recipe: [
      "Sauté onions, bell peppers, and garlic in olive oil until softened.",
      "Add canned lentils, diced tomatoes, vegetable broth, chili powder, cumin, and paprika.",
      "Simmer for 20-25 minutes.",
      "Serve with a dollop of Greek yogurt and chopped cilantro.",
    ],
    image: food,
  },
  {
    name: "Turkey and Vegetable Stir-Fry with Quinoa",
    calories: 380,
    protein: 25,
    fats: 10,
    carbs: 45,
    recipe: [
      "Cook ground turkey in a skillet until browned.",
      "Add chopped vegetables (bell peppers, broccoli, carrots) and stir-fry until tender.",
      "Season with soy sauce, ginger, and garlic.",
      "Serve over cooked quinoa.",
    ],
    image: food,
  },
  {
    name: "Mediterranean Grilled Chicken Salad",
    calories: 320,
    protein: 30,
    fats: 12,
    carbs: 25,
    recipe: [
      "Marinate chicken breast in lemon juice, olive oil, garlic, and oregano.",
      "Grill until cooked through.",
      "Toss mixed greens, cherry tomatoes, cucumber, olives, and feta cheese with balsamic vinaigrette.",
      "Top with sliced grilled chicken.",
    ],
    image: food,
  },
  {
    name: "Shrimp and Vegetable Stir-Fry with Brown Rice",
    calories: 380,
    protein: 20,
    fats: 10,
    carbs: 50,
    recipe: [
      "Sauté shrimp, bell peppers, snap peas, and broccoli in a skillet with olive oil.",
      "Season with garlic, ginger, and soy sauce.",
      "Serve over cooked brown rice.",
    ],
    image: food,
  },
  {
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
  },
];

const SelectMeals = () => {
  const navigation = useNavigation();
  const RenderFood = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("Meal Details")}>
        <View
          style={{
            marginRight: ms(20),
            width: ms(220),
            height: ms(180),
            backgroundColor: Theme.light.white,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <View>
            <Image
              source={item.image}
              style={{ height: ms(120), width: ms(220) }}
            />
          </View>
          <View style={{ padding: ms(10) }}>
            <Text
              style={{ fontWeight: "bold", color: Theme.light.text }}
            >{`${item?.name.slice(0, 25)}...`}</Text>
            <Text style={{ marginTop: 5, color: Theme.light.text }}>
              Calories:{" "}
              <Text style={{ fontWeight: "bold" }}>{item.calories}</Text>
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: ms(20),
          fontWeight: "bold",
          color: Theme.light.text,
          marginBottom: 20,
        }}
      >
        Select Meals
      </Text>
      <View>
        <View>
          <Text
            style={{
              fontSize: ms(15),
              fontWeight: "bold",
              color: Theme.light.text,
              marginBottom: 10,
            }}
          >
            BreakFast
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={breakfastRecipes}
            renderItem={RenderFood}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: ms(15),
              fontWeight: "bold",
              color: Theme.light.text,
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            Lunch
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={lunchRecipes}
            renderItem={RenderFood}
          />
        </View>
        <View style={{ marginBottom: ms(40) }}>
          <Text
            style={{
              fontSize: ms(15),
              fontWeight: "bold",
              color: Theme.light.text,
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            Dinner
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={dinnerRecipes}
            renderItem={RenderFood}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectMeals;
