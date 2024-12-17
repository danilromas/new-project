import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import TaskScreen from './screens/TaskScreen';
import ColleaguesScreen from './screens/ColleaguesScreen';
import GroupsScreen from './screens/GroupsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние для отслеживания входа

  // Функция для обновления состояния после входа
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Tasks" component={TaskScreen} />
          <Tab.Screen name="Список групп" component={GroupsScreen} />
          <Tab.Screen name="Список коллег" component={ColleaguesScreen} />
        </Tab.Navigator>
      ) : (
        // Если пользователь не вошел, показываем только экран входа
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}
    </NavigationContainer>
  );
}
