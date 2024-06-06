import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const data = [
  {
    title: "Welcome to The Canadian Citizenship Test",
    subtitle: "No ads, just learning.",
    text: "Study the latest material, practice using quizzes, test your knowledge using tests",
    image: require("./assets/leaf.png"),
  },
  {
    title: "Ad-Free Experience",
    text: "This is the second page.",
    image: require("./assets/secondslider.png"),
  },
  {
    title: "Unlimited Mock Tests",
    subtitle: "For Premium Users",
    text: "As a premium user, access unlimited mock tests to thoroughly prepare for the Canadian citizenship exam.",
    image: require("./assets/thirdslider.png"),
  },
];

const CarouselScreen = () => {
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      {index < data.length - 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => carouselRef.current.next()}
        >
          <Text style={styles.buttonText}>NEXT ➔</Text>
        </TouchableOpacity>
      )}
      {index === data.length - 1 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("LocationSelector")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ReanimatedCarousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        width={screenWidth}
        height={screenHeight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EE",
  },
  item: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#FB3640",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
  },
  inactiveDot: {
    backgroundColor: "lightgray",
  },
  button: {
    backgroundColor: "#FB3640",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CarouselScreen;
