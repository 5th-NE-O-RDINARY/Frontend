// App.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Test from '@/screens/Test';
import TabNavigator from '@/screens/TabNavigator';
import SignUp from '@/screens/SignUp';
import Home from '@/screens/Tab/Home';
import Login from '@/screens/Login';

const Stack = createStackNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
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
