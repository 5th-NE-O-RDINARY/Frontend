import { useState } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from '@/components/atoms/Button';

interface GoogleMapProps {
  lat: number;
  setLat: (lat: number) => void;
  log: number;
  setLog: (log: number) => void;
}
function GoogleMap() {

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    //setLat(latitude);
    //setLog(longitude);
    //console.log(lat, log);
  };
  return (
    <View>
      <Button onClick={() => {}}><Text>위치 선정하기</Text></Button>
      <MapView
        style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: 37.541,
          longitude: 126.986,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => handleMapPress(e)}
    />
    </View>
    
  );
}
export default GoogleMap;
