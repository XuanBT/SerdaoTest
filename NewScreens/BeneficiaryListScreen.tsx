import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Button,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {useTransactions} from '../TransactionContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from './RootParamList';
import {HightLightButton} from '../Common/Components';
export const BeneficiaryListScreen = (
  props: NativeStackScreenProps<RootParamList>,
) => {
  const {beneficiaryList} = useTransactions();
  const {width} = useWindowDimensions();

  const renderItem = ({item}: any) => (
    <View style={benStyles.item}>
      <Text style={benStyles.itemText}>Beneficiary ID: {item.id}</Text>
      <Text style={benStyles.itemText}>Full Name: {item.fullName}</Text>
      <Text style={benStyles.itemText}>IBAN: {item.iban}</Text>
    </View>
  );
  return (
    <View style={benStyles.container}>
      <SafeAreaView>
        {/* <Text>Beneficiary List</Text> */}
        {/* <Button
          title="Add Beneficiary"
          onPress={() => props.navigation.navigate("NewBeneficiaryScreen")}
        /> */}
        <View style={benStyles.buttonContainer}>
          <HightLightButton
            label="Add Beneficiary"
            onClickButtonEvent={() =>
              props.navigation.navigate('NewBeneficiaryScreen')
            }
            containerStyle={benStyles.buttonContent}
          />
        </View>

        {/* <FlatList
          data={beneficiaryList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={benStyles.listContainer}
        /> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={benStyles.tableContainer}>
            <View style={benStyles.tableHeader}>
              <View style={{width: 130, padding: 10}}>
                <Text style={benStyles.tableHeaderText}>Beneficiary ID</Text>
              </View>
              <View style={{width: 160, padding: 10}}>
                <Text style={benStyles.tableHeaderText}>Full Name</Text>
              </View>
              <View style={{width: 250, padding: 10}}>
                <Text style={benStyles.tableHeaderText}>IBAN</Text>
              </View>
            </View>
            {beneficiaryList &&
              beneficiaryList.length > 0 &&
              beneficiaryList.map((benItem, index) => {
                return (
                  <View style={benStyles.tableBody} key={index}>
                    <View style={{width: 130, padding: 10}}>
                      <Text>{benItem.id}</Text>
                    </View>
                    <View style={{width: 160, padding: 10}}>
                      <Text>{benItem.fullName}</Text>
                    </View>
                    <View style={{width: 250, padding: 10}}>
                      <Text>{benItem.iban}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const benStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContent: {
    marginVertical: 15,
  },
  tableContainer: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D3DCE6',
    marginRight: 15,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tableHeaderText: {
    color: '#70777E',
    fontSize: 13,
    fontWeight: 'bold',
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'row',
  },
});
