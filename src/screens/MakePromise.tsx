import Input from '@/components/Input';
import React, { useState } from 'react';
import AppBar from '@/components/atoms/AppBar';
import { Text, View, StyleSheet, TouchableOpacity,TextInputProps, ScrollView } from 'react-native';
import Gps from '@/assets/icon/gps';
import { Button } from '@/components/atoms/Button';
import styled from 'styled-components/native';
import Calendar from '@/assets/icon/calendar';
import Clock from '@/assets/icon/clock';
import GoogleMap from '@/components/atoms/GoogleMap';
import MapView from 'react-native-maps';

interface StyledInputProps extends TextInputProps {
  isPassword?: boolean;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  button?: React.ReactNode;
  onClick?: () => void;
}

const MakePromise = () => {
  const [title, setTitle] = useState<string>('');

  const [lat, setLat] = useState<any>(37);
  const [long, setLong] = useState<number>(126);

  const [date, setDate] = useState<string>('');

  const [perTime, setPerTime] = useState<string>('5분마다');

  const [time, setTime] = useState<string>('');

  const [location, setLocation] = useState<any>('');

  const [pass, setPass] = useState<'location' | 'leader'>('location');
  const [cost, setCost] = useState<'common' | 'either'>('common');
  const [costNumber, setCostNumber] = useState<string>('0');

  const [map, setMap] = useState<boolean>(false);

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setLat(latitude);
    setLong(longitude);
  };


  return (
    <ScrollView>
      {map === false ? (
        <View style={styles.container}>
        <AppBar label="약속 잡기" onClick={() => {}} />
        <View style={styles.wrapper}>
          {/*1. 제목*/}
          <Input
            label="제목"
            placeholder="약속 제목을 입력해주세요"
            onChangeText={(text) => {
              setTitle(text);
            }}
          />

          {/*2. 약속 일정*/}
          <Label>약속 일정</Label>
          <StyledInputContainer>
            <StyledInput
              placeholder={"날짜 설정"}
              onChangeText={(value: string) => setDate(value)}
              value={date}
            />
            <Calendar />
          </StyledInputContainer>

          <StyledInputContainer>
            <StyledInput
              placeholder={"시간 설정"}
              onChangeText={(value: string) => setTime(value)}
              value={time}
            />
            <Clock />
          </StyledInputContainer>

          {/*3. 약속 장소*/}
            <Label>인증 방법</Label>
            <LabelWrapper onPress={() => setMap(true)} >
              {(lat === 37 && long === 126) ? (<Text>장소를 정해주세요</Text>) : (
                <Text>장소를 입력하였습니다</Text>
              )}
              <Gps />
            </LabelWrapper>

          {/*4. 인증 방법*/}
          <View>
            <Label>인증 방법</Label>
            <View style={styles.flex}>
              <Button
                variant="small"
                disabled={pass === 'leader'}
                onClick={() => {
                  setPass('leader');
                }}
              >
                <Text style={styles.text}>위치 기반 자동 인증</Text>
              </Button>

              <Button
                variant="small"
                disabled={pass === 'location'}
                onClick={() => {
                  setPass('location');
                }}
              >
                <Text style={styles.text}>방장 수동 인증</Text>
              </Button>
            </View>
            <DesLabel>
              1:1 약속방에서만 방장이 수동 인증을 했을 때 완료돼요!
            </DesLabel>
          </View>

          <View style={{ marginTop: 5 }}>
            <Label>지각비 설정</Label>
            <DesLabel>
              방장들은 평균적으로 10,000원을 공통 지각비로 설정해요!
            </DesLabel>
            <View style={styles.flex}>
              <Button
                variant="small"
                disabled={cost === 'either'}
                onClick={() => {
                  setCost('either');
                }}
              >
                <Text style={styles.text}>공통 지각비 설정</Text>
              </Button>

              <Button
                variant="small"
                disabled={cost === 'common'}
                onClick={() => {
                  setCost('common');
                }}
              >
                <Text style={styles.text}>차등 지각비 설정</Text>
              </Button>
            </View>
          </View>
        {cost === "common" && (
          <Input
            placeholder="￦ 금액을 입력해주세요"
            onChangeText={(text) => {
              setCostNumber(text);
            }}
          />
        )}
        {cost === "either" && (
          <View style={styles.flex}>
          <Input
            placeholder="￦ 최대 지각비를 입력해주세요"
            onChangeText={(text) => {
              setCostNumber(text);
            }}
          />
          {/*<Picker
            selectedValue={perTime}
            onValueChange={(itemValue: string) => setPerTime(itemValue)}
          >
            <Picker.Item label="5분마다" value="5분마다" />
            <Picker.Item label="10분마다" value="10분마다" />
            <Picker.Item label="20분마다" value="20분마다" />
          </Picker>*/}


          </View>
        )}
          <Button
            disabled={
              title.length === 0 || location.length === 0 || costNumber === '0' || time.length === 0 || date.length === 0
            }
            onClick={() => {
              //약속 생성하기!
              console.log(title, date, time, cost, pass, costNumber);
            }}
          >
            <Text>약속 등록하기</Text>
          </Button>
        </View>
      </View>
      ): (
        <View style={styles.container}>
          <AppBar label='약속 장소 설정' onClick={() => setMap(false)} />
          {/*<GoogleMap />*/}
          <View style={styles.center}>
            <Button onClick={() => {setMap(false)}}>
              <Text>위치 선정하기</Text>
            </Button>
          </View>
          <MapView
            style={{ flex: 1, width: '100%', height: 700 }}
            initialRegion={{
              latitude: 37.541,
              longitude: 126.986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(e) => handleMapPress(e)}
            />
        </View>
      )}
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  wrapper: {
    marginLeft: 32,
    marginRight: 32,
  },
  text: {
    fontSize: 12,
  },
  labelWrapper: {
    width: 143,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Label = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 12px;
  margin-top: 10px;
`;
const OptionLabel = styled.Text`
  color: #5c5b7c;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  margin-left: 4px;
`;

const LabelWrapper = styled.TouchableOpacity`
  width: 311px;
  height: 52px;
  border-radius: 12px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0px 14px;
  font-size: 12px;
`;

const DesLabel = styled.Text`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.2px;
  color: #5c5b7c;
  margin-top: 7px;
  margin-bottom: 15px;
`;

const StyledInputContainer = styled.View`
  border-radius: 15px;
  background-color: #f1f1f1;
  width: 311px;
  height: 52px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 10px;
`;
const StyledInput = styled.TextInput<StyledInputProps>`
  max-width: 80%;
`;
export default MakePromise;
