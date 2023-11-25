import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Tab/Home';
import TabTest from './Tab/TabTest';
import Promises from './Promises';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({ headerShown: false })}
        initialRouteName="Home"
      >
        <Tab.Screen name="홈" component={Home} />
        <Tab.Screen name="약속잡기" component={TabTest} />
        <Tab.Screen name="Promises" component={Promises} />
        <Tab.Screen name="MY" component={TabTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
