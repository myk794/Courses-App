import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';
import AddPanel from './components/AddPanel';
export default function App() {
  const [panelIsVisible, setpanelIsVisible] = useState(false);
  const openAddPanel = () => {
    setpanelIsVisible(true);
  }
  const closeAddPanel = () => {
    setpanelIsVisible(false);
  }
  const addCourse = (courseTitle) => {
    console.log(courseTitle);
    closeAddPanel();
  }
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Button title="Kurs Ekle" color="red" onPress={openAddPanel}/>
      <AddPanel visible = {panelIsVisible} OnAddCourse={addCourse} onCancel={closeAddPanel}/>
       
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20
  },
});
