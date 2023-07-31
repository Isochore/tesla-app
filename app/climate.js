import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import climate from "../assets/images/climate.png";
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const ClimateScreen = () => {
  return (
    <View style={styles.climateSection}>
        <Image style={styles.image} source={climate} resizeMode="cover" />
        <View style={styles.actionSection}>
            <Text style={styles.globalTemperature}>Interior 74°F - Exterior 66°F</Text>
            <View style={styles.actionSelector}>
                    <View style={styles.powerSelector}>
                        <FontAwesome name="power-off" size={32} color="white" />
                        <Text style={styles.actionSecondaryText}>On</Text>
                    </View>
                    <View style={styles.temperatureSelector}>
                        <Entypo name="chevron-left" size={32} color="gray" />
                        <Text style={styles.actionPrimaryText}>68°</Text>
                        <Entypo name="chevron-right" size={32} color="gray" />
                    </View>
                    <View style={styles.ventSelector}>
                    <MaterialCommunityIcons name="car-door" size={32} color="gray" />
                        <Text style={styles.actionSecondaryText}>Vent</Text>
                    </View>
            </View>
        </View>
    </View>
  )
};


const styles = StyleSheet.create({
    climateSection: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#161818",
        height: "100%"
    },
    image: {
      width: "100%",
      height: 550,
      margin: 0,
      padding: 0,
    },
    actionSection: {
    },
    globalTemperature: {
        textAlign: "center",
        color: "gray",
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 16
    },
    actionSelector: {
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 32
    },
    temperatureSelector: {
        flexDirection:"row",
        alignItems: "center",
        gap: 16
    },
    powerSelector: {
        gap: 16
    },
    ventSelector: {
        gap: 16
    },
    actionPrimaryText: {
        color: "white",
        fontSize: 48,
        fontWeight: 300,
    },
    actionSecondaryText: {
        color: "white",
        fontSize: 16,
        fontWeight: 600
    }
  });
  

export default ClimateScreen;