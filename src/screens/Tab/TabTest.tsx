import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabTest = () => {
  const [title, setTitle] = useState<string>('');
  const onChangeTitle = (inputText: string) => {
    setTitle(inputText);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <SafeAreaView>
          <Text>약속잡기</Text>
        </SafeAreaView>

        <View style={styles.inputWrapper}>
          <Text>제목</Text>
          <TextInput
            onChangeText={onChangeTitle}
            placeholder="약속 제목을 입력해주세요"
            value={title}
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text>약속 일정</Text>
          <TextInput
            onChangeText={onChangeTitle}
            placeholder="약속 제목을 입력해주세요"
            value={title}
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    marginLeft: 32,
    marginRight: 32,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10,
  },
  input: {
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 14,
    backgroundColor: '#F1F1F1',
    height: 52,
    marginTop: 10,
    borderRadius: 15,
  },
});

export default TabTest;
