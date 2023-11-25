import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Test from '@/screens/Test';
import TabNavigator from '@/screens/TabNavigator';
import OnBoarding from '@/screens/OnBoarding/OnBoarding';
import SignUp from '@/screens/SignUp';
import Login from '@/screens/Login';
import Deposit from '@/screens/MyPage/Deposit';
import PromiseDetail from '@/screens/PromiseDetail';

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
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
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
            <Stack.Screen
              name="Deposit"
              component={Deposit}
              options={{
                title: '예치금',
              }}
            />
            <Stack.Screen
              name="PromiseDetail"
              component={PromiseDetail}
              options={{
                title: '약속 내용',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
