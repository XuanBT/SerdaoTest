import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootParamList} from './RootParamList';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useTransactions} from '../TransactionContext';
import {HightLightButton} from '../Common/Components';

export const TransactionListScreen = (
  props: NativeStackScreenProps<RootParamList>,
) => {
  const {transactions, balance} = useTransactions();

  const renderItem = ({item}: any) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Transaction ID: {item.id}</Text>
      <Text style={styles.itemText}>Amount: ${item.amount.toFixed(2)}</Text>
      {item.account && (
        <>
          <Text style={styles.itemText}>To: {item.account.name}</Text>
          <Text style={styles.itemText}>IBAN: {item.account.iban}</Text>
        </>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>
        Current Balance: ${balance.toFixed(2)}
      </Text>
      <HightLightButton
        label="Add Transaction"
        onClickButtonEvent={() => props.navigation.navigate('Transaction')}
      />
      <FlatList
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
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
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
    width: '100%',
  },
});
