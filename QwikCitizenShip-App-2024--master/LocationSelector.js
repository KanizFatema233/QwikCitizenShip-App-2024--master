import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CarouselScreen from "./carouselscreen";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const territories = ["Northwest Territories", "Nunavut", "Yukon"];

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleConfirm = (location) => {
    setSelectedLocation(location);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack("carouselscreen")}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Choose your province or territory from the list below
      </Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedLocation || "Province"}
        </Text>
        <AntDesign name="down" size={16} color="black" />
      </TouchableOpacity>

      <Button
        title="Confirm Location"
        onPress={() => alert(`Location confirmed: ${selectedLocation}`)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Location</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.sectionTitle}>Province</Text>
              {provinces.map((province) => (
                <TouchableOpacity
                  key={province}
                  style={styles.option}
                  onPress={() => handleConfirm(province)}
                >
                  <Text style={styles.optionText}>{province}</Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.sectionTitle}>Territory</Text>
              {territories.map((territory) => (
                <TouchableOpacity
                  key={territory}
                  style={styles.option}
                  onPress={() => handleConfirm(territory)}
                >
                  <Text style={styles.optionText}>{territory}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#FFF5EE",
  },
  backIconContainer: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  backIcon: {
    marginLeft: -10, // Adjust left margin to ensure it is placed well
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FB3640",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});
