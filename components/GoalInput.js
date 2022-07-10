import { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal, Image } from "react-native";
const GoalInput = (props) => {

    // const imageUrl = '';

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        if (enteredGoalText) {
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
    };

    return (
        <Modal visible = {props.visible} animationType = 'slide'>
            <View style = {styles.inputContainer}>
                {/* <Image style = {styles.image} source = {{uri: imageUrl}}/> */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Add your goal'
                    onChangeText = {goalInputHandler}
                    value = {enteredGoalText}
                />
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title = 'Cancel' onPress = {props.onCancel} color = '#f31282'/>
                    </View>
                    <View style = {styles.button}>
                        <Button title = 'Add Goal' onPress = {addGoalHandler} color = '#3f51b5'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      button:{
        width: 100,
        marginHorizontal: 8,
    },
});

export default GoalInput;