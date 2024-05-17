import { Image, StyleSheet, Platform } from "react-native";
import {Link, Redirect} from "expo-router";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

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
      <ThemedView
        style={[styles.titleContainer, { backgroundColor: "#FFFF00" }]}
      >
        <ThemedText type="title" style={{ flexGrow: 1 }}>
          Welcome to the ADL Community App!
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ flexGrow: 1 }}>
          Meetup:
        </ThemedText>
        <ThemedText style={{ flexGrow: 1 }}>
          Meetup with fellow ADL memebers at various motorsport events such as
          Formula Drift or Final Bout to name a few.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ flexGrow: 1 }}>
          Check-in:
        </ThemedText>
        <ThemedText style={{ flexGrow: 1 }}>
          Check in to find out which members are attending events as either a
          spectator or driver to show support for your fellow ADL members.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ flexGrow: 1 }}>
          Chat:
        </ThemedText>
        <ThemedText style={{ flexGrow: 1 }}>
          Everyone and their mother has Discord or Messenger but does your
          community have it's own app? ADL Does Now!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFF00", // Add background color here
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: "#FFFF00",
  },
  reactLogo: {
    height: 258,
    width: 450,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
