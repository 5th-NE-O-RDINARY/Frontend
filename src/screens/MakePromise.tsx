import Input from '@/components/Input';
import React, { useState } from 'react';
import AppBar from '@/components/atoms/AppBar';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  ScrollView,
} from 'react-native';
import Gps from '@/assets/icon/gps';
import { Button } from '@/components/atoms/Button';
import styled from 'styled-components/native';
import Calendar from '@/assets/icon/calendar';
import Clock from '@/assets/icon/clock';
import GoogleMap from '@/components/atoms/GoogleMap';
import MapView from 'react-native-maps';
import XIcon from '@/assets/icon/XButton';

interface StyledInputProps extends TextInputProps {
  isPassword?: boolean;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  button?: React.ReactNode;
  onClick?: () => void;
}

const MakePromise = ({ navigation }) => {
  const [title, setTitle] = useState<string>('');

  const [lat, setLat] = useState<number>(37);
  const [long, setLong] = useState<number>(126);

  const [date, setDate] = useState<string>('');

  const [perTime, setPerTime] = useState<string>('5분마다');

  const [time, setTime] = useState<string>('');

  const [location, setLocation] = useState<any>('');
  const [perTimeVisible, setPerTimeVisible] = useState<boolean>(false);
  const [pass, setPass] = useState<'location' | 'leader'>('location');
  const [cost, setCost] = useState<'common' | 'either'>('common');
  const [costNumber, setCostNumber] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [map, setMap] = useState<boolean>(false);

  const getAddressFromCoordinates = async (
    latitude: number,
    longitude: number,
  ) => {
    try {
      const apiKey = 'AIzaSyApOQfp96DxWeSrTpPiUm9G9UzfoezB93c';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${apiKey}&language=ko`,
      );

      const data = await response.json();
      console.log(data);

      if (data.results && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        setAddress(formattedAddress);
        console.log(`Formatted Address: ${formattedAddress}`);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Error fetching address');
    }
  };

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setLat(latitude);
    setLong(longitude);
    setMap(false);

    getAddressFromCoordinates(latitude, longitude);
    console.log(address);
  };
  const formatDate = (text) => {
    // Remove non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');

    // Format the date as YYYY - MM - DD
    if (numericText.length >= 8) {
      const formattedDate = `${numericText.substring(
        0,
        4,
      )} - ${numericText.substring(4, 6)} - ${numericText.substring(6, 8)}`;
      setDate(formattedDate);
    } else {
      setDate(numericText);
    }
  };

  return (
    <ScrollView>
      {map === false ? (
        <View style={styles.container}>
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
                placeholder={'YYYY - MM - DD'}
                onChangeText={(value: string) => setDate(value)}
                value={date}
              />
              <Calendar />
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledInput
                placeholder={'HH : MM'}
                onChangeText={(value: string) => setTime(value)}
                value={time}
              />
              <Clock />
            </StyledInputContainer>

            {/*3. 약속 장소*/}
            <Label>약속 장소</Label>
            <LabelWrapper onPress={() => setMap(true)}>
              {lat === 37 && long === 126 ? (
                <Text>장소를 정해주세요</Text>
              ) : (
                <Text style={{ color: '#0075FF' }}>장소를 입력하였습니다</Text>
              )}
              <Gps />
            </LabelWrapper>

            {/*4. 인증 방법*/}
            <View>
              <Label>인증 방법</Label>
              <View style={styles.flex}>
                <Button
                  variant="small"
                  color={pass == 'leader' ? '#0075FF' : '#cacaca'}
                  onClick={() => {
                    setPass('leader');
                  }}
                >
                  <Text style={styles.text}>위치 기반 자동 인증</Text>
                </Button>

                <Button
                  variant="small"
                  color={pass == 'location' ? '#0075FF' : '#cacaca'}
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
                  color={cost == 'either' ? '#0075FF' : '#cacaca'}
                  onClick={() => {
                    setCost('either');
                  }}
                >
                  <Text style={styles.text}>공통 지각비 설정</Text>
                </Button>

                <Button
                  variant="small"
                  color={cost == 'common' ? '#0075FF' : '#cacaca'}
                  onClick={() => {
                    setCost('common');
                  }}
                >
                  <Text style={styles.text}>차등 지각비 설정</Text>
                </Button>
              </View>
            </View>
            {cost === 'common' && (
              <Input
                placeholder="￦ 금액을 입력해주세요"
                onChangeText={(text) => {
                  setCostNumber(Number(text));
                }}
              />
            )}
            {cost === 'either' && (
              //    <View style={styles.flex}>
              //      <Input
              //        placeholder="￦ 최대 지각비를 입력해주세요"
              //        onChangeText={(text) => {
              //          setCostNumber(text);
              //        }}
              //      />
              //      {/*<Picker
              //  selectedValue={perTime}
              //  onValueChange={(itemValue: string) => setPerTime(itemValue)}
              //>
              //  <Picker.Item label="5분마다" value="5분마다" />
              //  <Picker.Item label="10분마다" value="10분마다" />
              //  <Picker.Item label="20분마다" value="20분마다" />
              //</Picker>*/}
              //    </View>
              <View style={styles.flexWrapper}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <StyledTextField
                    placeholder="￦ 최대 지각비를 입력해주세요"
                    onChangeText={(value: string) => {
                      setCostNumber(Number(value));
                    }}
                  />
                  <StyledLabelWrapper
                    onPress={() => {
                      setPerTimeVisible(true);
                    }}
                  >
                    <Text>{perTime}</Text>
                  </StyledLabelWrapper>
                </View>
                {perTimeVisible && (
                  <AlertModalWrapper>
                    <StyledButton
                      onPress={() => {
                        setPerTimeVisible(false);
                      }}
                    >
                      <Text>
                        <XIcon />
                      </Text>
                    </StyledButton>
                    <StyledModalText>주기 설정</StyledModalText>
                    <View style={styles.center}>
                      <Button
                        variant="short"
                        color={perTime !== '5분마다' ? '#cacaca' : '#0075FF'}
                        onClick={() => {
                          setPerTime('5분마다');
                        }}
                      >
                        <StyleText>5분마다</StyleText>
                      </Button>
                      <Button
                        variant="short"
                        color={perTime !== '10분마다' ? '#cacaca' : '#0075FF'}
                        onClick={() => {
                          setPerTime('10분마다');
                        }}
                      >
                        <StyleText>10분마다</StyleText>
                      </Button>
                      <Button
                        variant="short"
                        color={perTime !== '15분마다' ? '#cacaca' : '#0075FF'}
                        onClick={() => {
                          setPerTime('15분마다');
                        }}
                      >
                        <StyleText>15분마다</StyleText>
                      </Button>
                    </View>
                  </AlertModalWrapper>
                )}
              </View>
            )}
            <Button
              // disabled={
              //   title.length === 0 ||
              //   (lat === 37 && long === 126) ||
              //   date.length === 0 ||
              //   time.length === 0 ||
              //   costNumber.length === 0
              // }
              onClick={() => {
                navigation.navigate('PromiseDetail');
              }}
            >
              <Text>약속 등록하기</Text>
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <AppBar label="약속 장소 설정" onClick={() => setMap(false)} />
          {/*<GoogleMap />*/}
          <View style={styles.center}>
            <Button
              onClick={() => {
                setMap(false);
              }}
            >
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
    gap: 10,
    padding: 10,
  },
  flexWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 7,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 40,
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
const StyleText = styled.Text`
  font-size: 12px;
`;
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
  color: #0075ff;
`;

const StyledLabelWrapper = styled.TouchableOpacity`
  height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const StyledTextField = styled.TextInput<StyledInputProps>`
  width: 194px;
  background-color: #f1f1f1;
  border-radius: 15px;
  height: 50px;
  font-size: 12px;
  font-weight: 400;
  padding-left: 14px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-right: 50px;
`;
const AlertModalWrapper = styled(View)`
  position: absolute;
  height: 188px;
  background-color: #ffffff;
  border-radius: 15px;
  left: 8%;
  bottom: 45%;
`;

const StyledButton = styled(TouchableOpacity)`
  margin-top: 10px;
  margin-left: 90%;
  margin-bottom: 10px;
`;

const StyledText = styled(Text)`
  color: #0075ff;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.2px;
`;

const StyledDescription = styled(Text)`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

const Flex = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
`;
const StyledModalText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
  margin-left: 10px;
  margin-bottom: 40px;
`;
export default MakePromise;
