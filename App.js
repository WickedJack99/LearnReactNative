import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('Starting Page');

  function setText(i) {
    switch (i) {
      case 0: {
        setOutputText('Starting Page');
      }break;
      case 1: {
        setOutputText('This app is my first approach to React Native');
      }break;
      case 2: {
        setOutputText('WickedJack99');
      }break;
    }
  }

  return (
    <View style={styles.container}>
      <Text onPress={() => setText(0)}>{outputText}</Text>
      <Text onPress={() => setText(1)}>About | <Text onPress={() => setText(2)}>Contact</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});