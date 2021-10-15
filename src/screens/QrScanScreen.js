import React, { useEffect, useState } from "react";

import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";

import BarcodeMask from "react-native-barcode-mask";

const finderWidth = 280;

const finderHeight = 230;

const width = Dimensions.get("window").width;

const height = Dimensions.get("window").height;

const viewMinX = (width - finderWidth) / 2;

const viewMinY = (height - finderHeight) / 2;

export default function QrScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);

  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (scanningResult) => {
    if (!scanned) {
      const { type, data, bounds: { origin } = {} } = scanningResult;

      // @ts-ignore

      const { x, y } = origin;

      if (
        x >= viewMinX &&
        y >= viewMinY &&
        x <= viewMinX + finderWidth / 2 &&
        y <= viewMinY + finderHeight / 2
      ) {
        setScanned(true);

        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        type={type}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <View style={styles.headerContainer}>
          <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={24}
            color="black"
          />
          <Text style={styles.homeText}>Scan</Text>
          <View />
        </View>

        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />

        {scanned && (
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        )}
      </BarCodeScanner>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,

    fontWeight: "bold",
  },

  separator: {
    marginVertical: 30,

    height: 1,

    width: "80%",
  },

  homeText: {
    fontSize: 22,
    color: "#000000",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 0,
    backgroundColor: "#fff",
    width: "100%",
    height: 60,
  },
});
