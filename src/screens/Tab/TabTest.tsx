import { Text, View, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '@/components/atoms/AppBar';

const TabTest = () => {
  const [title, setTitle] = useState<string>('');
  const onChangeTitle = (inputText: string) => {
    setTitle(inputText);
  };
  return (
    <View style={styles.wrapper}>
      {/*<SafeAreaView>
        <AppBar label="약속잡기" />
      </SafeAreaView>
      <View style={styles.container}>
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
          <View style={styles.flex}>
            <TextInput
              onChangeText={onChangeTitle}
              placeholder="날짜 설정"
              value={title}
              style={styles.date}
            />
            <TextInput
              onChangeText={onChangeTitle}
              placeholder="시간 설정"
              value={title}
              style={styles.date}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text>약속 장소</Text>
          <TextInput
            onChangeText={onChangeTitle}
            placeholder="장소를 입력해주세요"
            value={title}
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text>인증 방법</Text>
          <View style={styles.flex}>
            <Button title="위치기반 자동 인증" />
            <Button title="방장 수동 인증" />
          </View>
          <Text>1:1 약속방에서만 방장이 수동 인증을 했을 때 완료돼요!</Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text>지각비 설정</Text>
          <Text>방장들은 평균적으로 10,000원을 공통 지각비로 설정해요!</Text>
          <View style={styles.flex}>
            <Button title="위치기반 자동 인증" />
            <Button title="방장 수동 인증" />
          </View>
          <TextInput placeholder="￦ 금액을 입력해주세요" />
        </View>

        <Button title="약속 등록하기" />
      </View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    width: '100%',
    height: '100%',
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
    marginTop: 15,
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
  date: {
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
    width: 143,
    height: 40,
    marginTop: 12,
    textAlign: 'center',
  },
});

export default TabTest;
