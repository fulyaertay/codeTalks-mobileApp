import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  useWindowDimensions,
  StyleSheet,
  Alert,
  TextInput,
  Linking,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  NavigationContainer,
  useNavigation,
  ScrollView,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HTML from "react-native-render-html";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import axios from "axios";
import LottieView from "lottie-react-native";
function Odalar(props) {
  const navigation = useNavigation();
  const handleLogout = () => {
    // Logout işlemini gerçekleştir
    navigation.navigate("GirisYap"); // Örnek olarak "GirisYap" ekranına yönlendirme
  };
  const windowDimensions = useWindowDimensions();

  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

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

  const email = props.route.params.email;

  const handlePress = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  console.log(props);
  const handleSend = () => {
    // Mesajı gönderme işlemini burada gerçekleştir
    Alert.alert("Gönderilen Mesaj:", message);
    handleClose(); // Modalı kapat
  };
  console.log(message);

  const handleOdaDetail = () => {
    navigation.navigate("OdaDetail", { message, email });
  };
  return (
    <>
      <View
        style={{
          width: "100%",
          padding: 10,
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            padding: 10,
            marginVertical: 10,
            marginRight: 10,
            textAlign: "center",
            justifyContent: "center",
          }}
          onPress={handleOdaDetail}
        >
          <Text
            style={{
              textAlign: "center",
              color: "orange",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Python
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            padding: 10,
            marginVertical: 10,
            textAlign: "center",
            justifyContent: "center",
          }}
          onPress={handleOdaDetail}
        >
          <Text
            style={{
              textAlign: "center",
              color: "orange",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            React JS
          </Text>
        </TouchableOpacity>

        {message && (
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              padding: 10,
              marginVertical: 10,
              marginLeft: 10,
              textAlign: "center",
              justifyContent: "center",
            }}
            onPress={handleOdaDetail}
          >
            <Text
              style={{
                textAlign: "center",
                color: "orange",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {message}
            </Text>
          </TouchableOpacity>
        )}
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
        <Modal isVisible={isVisible} onBackdropPress={handleClose}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Oda ismini girin..."
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <Text style={{ color: "white" }}>Gönder</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
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
export default Odalar;
