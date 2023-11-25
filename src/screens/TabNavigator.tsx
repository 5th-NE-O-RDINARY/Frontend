import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tab/Home';
import TabTest from './Tab/TabTest';
import OnBoarding from './OnBoarding/OnBoarding';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({ headerShown: false })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TabTest" component={TabTest} />
        <Tab.Screen name="OnBoarding" component={OnBoarding} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
