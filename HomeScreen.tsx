import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  AppState,
} from 'react-native';
import {useTransactions} from './TransactionContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from './NewScreens';
import {TransactionInfo} from './Common';

const HomeScreen = ({navigation}: NativeStackScreenProps<RootParamList>) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("BeneficiaryListScreen")}}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Beneficiary List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate("TransactionListScreen")}}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Transaction List</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonContent: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 100,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ed1b2e',
  },
  buttonText: {
    color: '#ed1b2e',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
