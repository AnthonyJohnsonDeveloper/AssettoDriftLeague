import { Image, StyleSheet, Platform } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
export default function HomeScreen() {
  return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
          headerImage={
            <Image
              source={require("@/assets/images/partial-adl-logo.png")}
              style={styles.reactLogo}
            />
          }
        >
          <ThemedView style={styles.contentContainer}>
            <ThemedText type="title" style={styles.titleText}>
              Welcome to the ADL Community App! 👋
            </ThemedText>
            <HelloWave />

            <ThemedText type="subtitle" style={styles.subtitleText}>
              Meetup:
            </ThemedText>
            <ThemedText style={styles.descriptionText}>
              Meetup with fellow ADL members at various motorsport events such
              as Formula Drift or Final Bout to name a few.
            </ThemedText>

            <ThemedText type="subtitle" style={styles.subtitleText}>
              Check-in:
            </ThemedText>
            <ThemedText style={styles.descriptionText}>
              Check in to find out which members are attending events as either
              a spectator or driver to show support for your fellow ADL members.
            </ThemedText>

            <ThemedText type="subtitle" style={styles.subtitleText}>
              Chat:
            </ThemedText>
            <ThemedText style={styles.descriptionText}>
              Everyone and their mother has Discord or Messenger but does your
              community have its own app? ADL Does Now!
            </ThemedText>
          </ThemedView>
        </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#FFFF00", // Yellow background
    padding: 20, // Padding around the content
    marginHorizontal: 10, // Margin to add some space on the sides
    borderRadius: 10, // Rounded corners to match the design
    marginTop: -50, // Adjust margin to overlap with the header image
    zIndex: 1, // Ensure it floats above other content
  },
  reactLogo: {
    height: 258,
    width: "100%",
    resizeMode: "cover", // Ensure the image covers the header area
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // Space below the title
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20, // Space above each subtitle
    marginBottom: 10, // Space below each subtitle
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20, // Space below each description
  },
});
