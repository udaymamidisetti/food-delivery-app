import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OrderDelivery({ navigation }) {
  function renderMap() {
    return <View></View>;
  }

  return (
    <View>
      <View>
        <Image
          source={icons.check}
          resizeMode="contain"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            height: 130,
            width: 130,
            marginTop: 250,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Order Placed Succesfully
        </Text>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "orange",
              height: 35,
              width: 150,
              borderRadius: 10,
              paddingTop: 7,
            }}
          >
            Go Back To Menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
