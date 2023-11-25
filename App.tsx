// App.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
<<<<<<< HEAD
import { StyleSheet } from 'react-native';
=======
>>>>>>> 655c7b61f355d24ce99475f9fddf212029b9f191
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '@/screens/Test';
import TabNavigator from '@/screens/TabNavigator';
<<<<<<< HEAD
import GoogleMap from '@/components/atoms/GoogleMap';
import MapView from 'react-native-maps';
=======
import SignUp from '@/screens/SignUp';
import Home from '@/screens/Tab/Home';
import Login from '@/screens/Login';
>>>>>>> 655c7b61f355d24ce99475f9fddf212029b9f191

const Stack = createStackNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {/*<GoogleMap />*/}

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                height: 60,
                backgroundColor: '#fff',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: '600',
                fontSize: 20,
              },
            }}
            initialRouteName={'Home'}
          >
            <Stack.Screen name="Test" component={Test} />
            {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                title: '회원 가입',
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: '로그인',
              }}
            />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
