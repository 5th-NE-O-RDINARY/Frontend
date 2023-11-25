import { useState } from 'react';
import MapView from 'react-native-maps';

function GoogleMap() {
  const [modal, setModal] = useState<boolean>(false);

  const handleMapPress = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setModal(true);
  };
  return (
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
  );
}
export default GoogleMap;
