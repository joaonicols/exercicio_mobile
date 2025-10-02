import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./components/Login";
import { StyleSheet } from "react-native";
import Splash from "./components/Splash";

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Splash/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default App;