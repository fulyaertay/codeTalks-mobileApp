import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import axios from "axios";
import LottieView from "lottie-react-native";
function OdaDetail(props) {
  const now = new Date();

  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const handleLogout = () => {
    // Logout işlemini gerçekleştir
    navigation.navigate("GirisYap"); // Örnek olarak "GirisYap" ekranına yönlendirme
  };
  console.log(props.route.params);
  useEffect(() => {
    // headerRight ile ilgili bir şey yapmak istiyorsanız,
    // burada yapabilirsiniz
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
          <FontAwesome name="sign-out" size={24} color="orange" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    // headerRight ile ilgili bir şey yapmak istiyorsanız,
    // burada yapabilirsiniz
    navigation.setOptions({
      title: props.route.params.message,
    });
  }, [navigation, props.route.params.message]);

  const handlePress = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSend = () => {
    handleClose(); // Modalı kapat
  };
  return (
    <View style={{ backgroundColor: "#ff6f00", flex: 1 }}>
      <Text
        style={{
          padding: 10,
          color: "white",
          fontSize: 20,
          textAlign: "center",
          borderWidth: 2,
          borderStyle: "dotted",
          borderColor: "white",
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        {props.route.params.message} odası kuruldu
      </Text>
      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 40,
          marginHorizontal: 10,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{props.route.params.email.split("@")[0]}</Text>
          <Text style={{ fontStyle: "italic" }}>
            {now.toLocaleDateString()} {now.toLocaleTimeString()}
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            {message}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignContent: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: 80,
            borderRadius: 50,
            marginRight: 10,
            height: 80,
            backgroundColor: "orange",
            padding: 10,
            marginVertical: 10,
            textAlign: "center",
            justifyContent: "center",
          }}
          onPress={handlePress}
        >
          <FontAwesome
            name="plus"
            size={30}
            style={{ textAlign: "center" }}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isVisible} onBackdropPress={handleClose}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Mesajınızı girin..."
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={{ color: "white" }}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // İçeriği aşağı kaydırmak için kullanılabilir
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    padding: 25,
  },
  sendButton: {
    backgroundColor: "orange",
    padding: 10,
    width: 310,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default OdaDetail;
