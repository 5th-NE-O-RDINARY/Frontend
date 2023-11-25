import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { RecoilRoot } from 'recoil';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Text>구글맵 확인</Text>
          <Text>컴포넌트 자리</Text>
          <MapView
            style={{ flex: 1, width: '100%' }}
            initialRegion={{
              latitude: 37.541,
              longitude: 126.986,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <StatusBar style="auto" />
        </View>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
