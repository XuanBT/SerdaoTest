import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTransactions} from './TransactionContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from './NewScreens';
import {TransactionInfo} from './Common';

const HomeScreen = ({navigation}: NativeStackScreenProps<RootParamList>) => {
  // const { transactions, balance } = useTransactions();

  // const renderItem = ({ item }: any) => (
  //   <View style={styles.item}>
  //     <Text style={styles.itemText}>Transaction ID: {item.id}</Text>
  //     <Text style={styles.itemText}>Amount: ${item.amount.toFixed(2)}</Text>
  //     {item.account && (
  //       <>
  //         <Text style={styles.itemText}>To: {item.account.name}</Text>
  //         <Text style={styles.itemText}>IBAN: {item.account.iban}</Text>
  //       </>
  //     )}
  //   </View>
  // );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.balanceText}>Current Balance: ${balance.toFixed(2)}</Text>
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('Transaction')}
      />
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      /> */}
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
