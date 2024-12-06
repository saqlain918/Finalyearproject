import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  // State for hero image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images
  const heroImages = [
    require("../../assets/icons/agri.png"),
    require("../../assets/icons/farm1.png"),
    require("../../assets/icons/farm2.png"),
    require("../../assets/icons/farm3.png"),
    require("../../assets/icons/farm4.png"),
    require("../../assets/icons/farm5.png"),
    require("../../assets/icons/farm6.png"),
    require("../../assets/icons/farm7.png"),
    require("../../assets/icons/farm8.png"),
    require("../../assets/icons/farm9.png"),
    require("../../assets/icons/farm10.png"),
    require("../../assets/icons/farm11.png"),
  ];

  // Update image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>Cultivation For Naives</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image
            source={require("../../assets/icons/bell.png")}
            style={styles.notificationImage}
          />
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={heroImages[currentImageIndex]} // Dynamic image source
          style={styles.heroImage}
        />
        <Text style={styles.heroText}>
          Empowering Agriculture with Smart Solutions
        </Text>
      </View>

      {/* Dashboard Section */}
      <View style={styles.dashboardSection}>
        <Text style={styles.sectionTitle}>Dashboard</Text>
        <View style={styles.dashboardGrid}>
          {/* Manage Profile */}
          <TouchableOpacity
            style={styles.dashboardCard}
            onPress={() => router.push("/create-thread")}
          >
            <Image
              source={require("../../assets/icons/community.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Create Thread</Text>
          </TouchableOpacity>

          {/* Monitor Farm */}
          <TouchableOpacity
            style={styles.dashboardCard}
            onPress={() => router.push("/monitor-farm")}
          >
            <Image
              source={require("../../assets/icons/Monitor-Farm.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Monitor Farm</Text>
          </TouchableOpacity>

          {/* Manage Ads */}
          <TouchableOpacity
            style={styles.dashboardCard}
            onPress={() => router.push("/manage-ads")}
          >
            <Image
              source={require("../../assets/icons/Ads.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Manage Ads</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featuresGrid}>
          {/* Consult Expert */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => router.push("/consult-expert")}
          >
            <Image
              source={require("../../assets/icons/expert-consult.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Consult Expert</Text>
          </TouchableOpacity>

          {/* Handle Equipment */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => router.push("/zain-equipment")}
          >
            <Image
              source={require("../../assets/icons/Handle-Equipment.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>zain Equipment</Text>
          </TouchableOpacity>

          {/* Forecast Yield */}
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => router.push("/forecast-yield")}
          >
            <Image
              source={require("../../assets/icons/forecast.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Forecast Yield</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Alerts Section */}
      <View style={styles.alertsSection}>
        <Text style={styles.sectionTitle}>Alerts & Insights</Text>
        <View style={styles.alertsGrid}>
          {/* Weather Prediction */}
          <TouchableOpacity
            style={styles.alertCard}
            onPress={() => router.push("/weather-prediction")}
          >
            <Image
              source={require("../../assets/icons/weather.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Weather Prediction</Text>
          </TouchableOpacity>

          {/* Early Alerts */}
          <TouchableOpacity
            style={styles.alertCard}
            onPress={() => router.push("/early-alerts")}
          >
            <Image
              source={require("../../assets/icons/alerts.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Early Alerts</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feedback & Payments Section */}
      <View style={styles.feedbackSection}>
        <Text style={styles.sectionTitle}>User Feedback & Payments</Text>
        <View style={styles.feedbackGrid}>
          {/* Feedback */}
          <TouchableOpacity
            style={styles.feedbackCard}
            onPress={() => router.push("/feedback")}
          >
            <Image
              source={require("../../assets/icons/feedback.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Give Feedback</Text>
          </TouchableOpacity>

          {/* Make Payment */}
          <TouchableOpacity
            style={styles.feedbackCard}
            onPress={() => router.push("/make-payment")}
          >
            <Image
              source={require("../../assets/icons/payment.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardTitle}>Make Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#2E7D32",
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationIcon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
  },
  notificationImage: {
    width: 30,
    height: 30,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 3,
    padding: 10,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  heroText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginLeft: 15,
    marginBottom: 10,
  },
  dashboardGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  dashboardCard: {
    backgroundColor: "#fff",
    width: "30%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  featuresGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  featureCard: {
    backgroundColor: "#fff",
    width: "28%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  alertsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  alertCard: {
    backgroundColor: "#fff",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  feedbackGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  feedbackCard: {
    backgroundColor: "#fff",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default Home;
