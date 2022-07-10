import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
    return (
        <View style = {styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style = {styles.goalText}>{props.goalText}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 10,
        borderRadius: 6,
        backgroundColor: '#1F4690',
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});

export default GoalItem;