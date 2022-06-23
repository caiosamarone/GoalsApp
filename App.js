import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handlePress = (text) => {
    setList((list) => [...list, { text: text, id: Math.random().toString() }]);
  };
  const toggleVisible = () => {
    setOpenModal((openModal) => !openModal);
  };

  const deleteGoal = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={toggleVisible} />
        <GoalInput
          handlePress={handlePress}
          openModal={openModal}
          toggleVisible={toggleVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={list}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoal={deleteGoal}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
