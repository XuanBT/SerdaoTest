import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import TransactionScreen from './TransactionScreen';
import { TransactionProvider } from './TransactionContext';
import { BeneficiaryListScreen, NewBeneficiaryScreen } from './NewScreens';
import { TransactionListScreen } from './NewScreens/TransactionListScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Transaction" component={TransactionScreen} />
          <Stack.Screen name="TransactionListScreen" component={TransactionListScreen} />
          <Stack.Screen name="NewBeneficiaryScreen" component={NewBeneficiaryScreen} />
          <Stack.Screen name="BeneficiaryListScreen" component={BeneficiaryListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default App;
