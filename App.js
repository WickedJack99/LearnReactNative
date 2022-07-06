
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  //console.log("App executed"); //use console logs only for development because they slow down program execution.

  const handlePress = () => console.log("Text clicked");

  

  return (
    //Like div
    //ios: View -> UIView
    //Self closing syntax to make code cleaner: instead of <Image></Image> use <Image />
    //Use static images type: require("./assets/icon.png") in source
    //https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hello World!</Text>
      
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//Creating an object "styles"
const styles = StyleSheet.create({
  //Container including all styles of object "styles".
  container: {
    //Container is flexible, meaning it fills horizontically and vertically the free space
    flex: 1,
    //Background-color of container is white(#fff)
    backgroundColor: '#fff',
    //Content positioning at container
    alignItems: 'center',
    justifyContent: 'center',

  },
});
