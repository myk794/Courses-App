import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image,FlatList } from 'react-native';
import { useState } from 'react';
import AddPanel from './components/AddPanel';
export default function App() {
  const [panelIsVisible, setpanelIsVisible] = useState(false);
  const [courses, setcourses] = useState([])
  const openAddPanel = () => {
    setpanelIsVisible(true);
  }
  const closeAddPanel = () => {
    setpanelIsVisible(false);
  }
  const addCourse = (courseTitle) => {
    //console.log(courseTitle);
    setcourses((currentCourses)=>[
      ...currentCourses,
      {text: courseTitle, id: Math.random().toString()},
    ])
    closeAddPanel();
  }
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Button title="Kurs Ekle" color="red" onPress={openAddPanel}/>
      <AddPanel visible = {panelIsVisible} OnAddCourse={addCourse} onCancel={closeAddPanel}/>
      <View>
        <FlatList
        data={courses}
        renderItem={({item}) => 
        <View>
          <Text>{item.text}</Text>
        </View>
        }
        />
      </View>
       
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
