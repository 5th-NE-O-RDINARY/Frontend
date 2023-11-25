import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Test from '@/screens/Test';
import TabNavigator from '@/screens/TabNavigator';
import OnBoarding from '@/screens/OnBoarding/OnBoarding';

const Stack = createStackNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName={'TabNavigator'}
          >
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
          </Stack.Navigator>
        </NavigationContainer>
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
