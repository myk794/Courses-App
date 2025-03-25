import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Kurs Ekle" color="red" />
    </View>
    </>
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
