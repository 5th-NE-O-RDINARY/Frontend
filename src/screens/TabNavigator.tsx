import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tab/Home';
import PromiseHistory from './Tab/PromiseHistory';
import Mypage from './Tab/Mypage';
import { Platform } from 'react-native';
import HomeIcon from '@/assets/icon/HomeIcon';
import PromiseIcon from '@/assets/icon/PromiseIcon';
import PromiseHistoryIcon from '@/assets/icon/PromiseHistory';
import MypageIcon from '@/assets/icon/MypageIcon';
import MakePromise from '@/screens/MakePromise';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 94,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          elevation: 5,
          paddingHorizontal: 11,
        },
        tabBarIconStyle: {
          justifyContent: 'space-between',
        },
        tabBarInactiveTintColor: '#5C5B7C',
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: -0.24,
          marginBottom: 14,
          marginTop: -20,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="약속잡기"
        component={MakePromise}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <PromiseIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="약속내역"
        component={PromiseHistory}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <PromiseHistoryIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="MY"
        component={Mypage}
        options={{
          headerTitle: '마이페이지',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <MypageIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
