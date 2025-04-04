import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

export default function AddPanel({ visible,OnAddCourse,onCancel }) {

    const [enteredText, setenteredText] = useState('')
    const addCourseHandler = () => {
        OnAddCourse(enteredText);
        setenteredText('');
    };

    return (
        <Modal
            animationType="slide"
            visible={visible}>

            <View style={styles.inputContainer}>

                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <TextInput style={styles.input} placeholder='Enter course name..' onChangeText={(text)=>setenteredText(text)}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color="red" onPress={onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Submit' color="green" onPress={addCourseHandler}/>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 20
    },
    input: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 15
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 20
    },
    button:{
        width: 100,
        marginHorizontal: 10,
        
    },
    textInput:{}
})