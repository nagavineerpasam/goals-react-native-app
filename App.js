import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const viewModal = () => {
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    hideModal();
  };

  const onDeleteHandler = (id) => {
    setCourseGoals(courseGoals => courseGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <View style = {styles.button}>
        <Button title = 'Add New Goal' color = '#3f51b5' onPress={viewModal}/>
      </View>
      <GoalInput visible = {modalIsVisible} onAddGoal = {addGoalHandler} onCancel = {hideModal}/>
      <View style = {styles.goalsContainer}>
        <FlatList data = {courseGoals}
          renderItem = {(itemData) => {
            return <GoalItem id = {itemData.item.id} goalText = {itemData.item.text} onDeleteItem = {onDeleteHandler}/>
          }}
          keyExtractor = {(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
  }
});