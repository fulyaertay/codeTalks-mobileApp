// In App.js in a new project

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Odalar from "./pages/Odalar";
import OdaDetail from "./pages/OdaDetail";
import axios from "axios";
import LottieView from "lottie-react-native";
import { FontAwesome } from "@expo/vector-icons";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function HomeScreen() {
  const [email, setEmail] = useState("fulya.ertay@gmail.com");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleKayitOl = () => {
    navigation.navigate("KayitOl");
  };

  const handleRegister = () => {
    if (email === "fulya.ertay@gmail.com" && password === "123") {
      Alert.alert("Giriş Başarılı!");
      navigation.navigate("Odalar", { email });
    }

    // Burada kayıt işlemi yapılabilir
    console.log("E-posta:", email);
    console.log("Şifre:", password);
    console.log("Tekrar Şifre:", confirmPassword);
  };
  // Başlık çubuğunu gizlemek için navigation.setOptions kullanılır
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Başlık çubuğunu gizlemek için headerShown: false olarak ayarla
    });
  }, [navigation]);

  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("https://www.themuse.com/api/public/jobs?page=1")
      .then((response) => {
        setData(response.data.results);
      });
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#ff6f00",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 50, marginBottom: 30 }}>
        codeTalks
      </Text>
      <TextInput
        style={{
          backgroundColor: "#e6e9ec",
          padding: 10,
          width: 350,
          placeholderTextColor: "white",
        }}
        placeholder="E-postanızı giriniz.."
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          backgroundColor: "#e6e9ec",
          marginTop: 10,
          marginBottom: 20,
          padding: 10,
          width: 350,
        }}
        placeholder="Şifrenizi giriniz.."
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          width: 350,
          backgroundColor: "#ffa040",
          padding: 10,
          marginVertical: 10,
          textAlign: "center",
        }}
        onPress={handleRegister}
      >
        <Text style={{ textAlign: "center", color: "white" }}> Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 350,
          backgroundColor: "white",
          padding: 10,
          marginVertical: 1,
          textAlign: "center",
        }}
        onPress={handleKayitOl}
      >
        <Text style={{ textAlign: "center", color: "orange" }}> Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

function KayitOl() {
  const [email, setEmail] = useState("fulya.ertay@gmail.com");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleKayitOl = () => {
    if (password !== confirmPassword) {
      Alert.alert("Şifreler Uyuşmuyor");
    } else {
      // Burada kayıt işlemi yapılabilir
      console.log("E-posta:", email);
      console.log("Şifre:", password);
      console.log("Tekrar Şifre:", confirmPassword);
      navigation.navigate("Odalar", { email });
    }
  };

  // Başlık çubuğunu gizlemek için navigation.setOptions kullanılır
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Başlık çubuğunu gizlemek için headerShown: false olarak ayarla
    });
  }, [navigation]);

  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get("https://www.themuse.com/api/public/jobs?page=1")
      .then((response) => {
        setData(response.data.results);
      });
  }, []);

  const handleGeri = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        backgroundColor: "#ff6f00",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 50, marginBottom: 30 }}>
        codeTalks
      </Text>
      <TextInput
        style={{
          backgroundColor: "#e6e9ec",
          padding: 10,
          width: 350,
          placeholderTextColor: "white",
        }}
        placeholder="E-postanızı giriniz.."
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          backgroundColor: "#e6e9ec",
          marginTop: 10,
          marginBottom: 20,
          padding: 10,
          width: 350,
        }}
        placeholder="Şifrenizi giriniz.."
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={{
          backgroundColor: "#e6e9ec",
          marginTop: 10,
          marginBottom: 20,
          padding: 10,
          width: 350,
        }}
        placeholder="Şifrenizi tekrar giriniz.."
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          width: 350,
          backgroundColor: "#ffa040",
          padding: 10,
          marginVertical: 10,
          textAlign: "center",
        }}
        onPress={handleKayitOl}
      >
        <Text style={{ textAlign: "center", color: "white" }}> Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 350,
          backgroundColor: "white",
          padding: 10,
          marginVertical: 1,
          textAlign: "center",
        }}
        onPress={handleGeri}
      >
        <Text style={{ textAlign: "center", color: "orange" }}> Geri</Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#ff6f00",
          headerStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="GirisYap" component={HomeScreen} />
        <Stack.Screen name="KayitOl" component={KayitOl} />
        <Stack.Screen
          name="Odalar"
          component={Odalar}
          options={{
            title: "Odalar",
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <FontAwesome name="sign-out" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="OdaDetail"
          component={OdaDetail}
          options={{
            title: "Odalar",
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <FontAwesome name="sign-out" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
