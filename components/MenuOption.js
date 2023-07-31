import { Text, View, StyleSheet } from "react-native";
import {
    MaterialCommunityIcons,
    MaterialIcons,
  } from '@expo/vector-icons';

const  MenuOption = ({item}) => {
    return (
        <View style={styles.optionRow} >
            <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
            <Text style={styles.optionText}>Controls</Text>
            <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" style={{ marginLeft: "auto" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    optionRow: {
      flexDirection: "row",
      marginVertical: 20,
      alignItems: "center",
    },
    optionText: {
      color: "#eee",
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 10,
    }
  }); 

export default MenuOption;