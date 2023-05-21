import React, { useState } from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

function App(): JSX.Element{

    const [randomBg, setRandomBg] = useState('#FFFFFF');

    function generateColor() {
        let color = '#';
        // const hexRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        const hexRange = '0123456789ABCDEF';
        for (let i = 1; i <= 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)];
        }
        // return color;
        setRandomBg(color);
    }

    return (
        <>
            <StatusBar backgroundColor={randomBg} />
            <SafeAreaView style={[styles.container, {backgroundColor: randomBg}]}>
                <Text style={styles.hexcode} selectable>{randomBg}</Text>
                {/* <TouchableOpacity style={styles.btn} onPress={() => setRandomBg(generateColor())}> */}
                <TouchableOpacity style={styles.btn} onPress={generateColor}>
                    <Text>Change</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
      height: '100%',
      padding: 8,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn:{
      margin: 10,
      padding: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#FFF',
    },
    hexcode:{
        padding: 10,
    },
});

export default App;
