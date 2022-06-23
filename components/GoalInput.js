import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [text, setText] = useState('');
  const goalInputHandler = (text) => {
    setText(text);
  };

  const handlePress = () => {
    props.handlePress(text);
    props.toggleVisible();
    setText('');
  };

  return (
    <Modal visible={props.openModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          placeholder="Your course goals"
          style={styles.textInput}
          value={text}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handlePress} color="#b180f0" />
          </View>

          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.toggleVisible}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
