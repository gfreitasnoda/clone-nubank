import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./css/Styles";
import {
  Feather,
  Ionicons,
  Octicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headericons}>
          <View>
            <Feather
              name="user"
              size={32}
              color="#fff"
              style={styles.headericonuser}
            />
          </View>

          <View style={styles.headericonsright}>
            <Ionicons name="md-eye-outline" size={28} color="#fff" />
            <Octicons name="question" size={23} color="#fff" />
            <MaterialCommunityIcons
              name="email-plus-outline"
              size={23}
              color="#fff"
            />
          </View>
        </View>
        <Text style={styles.txtuser}>Olá, Gabriela!</Text>
      </View>

      <View style={styles.account}>
        <View style={styles.accountline}>
          <Text style={styles.txtaccount}>Conta</Text>
          <Ionicons name="ios-chevron-forward" size={23} color="#000" />
        </View>
        <Text style={styles.txtvalue}>R$ 50,32</Text>
      </View>

      <View style={styles.nav}>
        <View style={styles.navitem}>
          <AntDesign
            name="antdesign"
            size={32}
            color="#000"
            style={styles.navitemicon}
          />
          <Text>Pix</Text>
        </View>

        <View style={styles.navitem}>
          <AntDesign
            name="barcode"
            size={32}
            color="#000"
            style={styles.navitemicon}
          />
          <Text>Pagar</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={24}
            color="black"
            style={styles.navitemicon}
          />
          <Text>Pagar</Text>
        </View>
      </View>

      <View style={styles.card}></View>
      <View style={styles.message}></View>
      <View style={styles.account}></View>
      <StatusBar style="auto" />
    </View>
  );
}
