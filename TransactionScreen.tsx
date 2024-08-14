import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {useTransactions} from './TransactionContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList, TransactionForm} from './NewScreens';
import {
  HightLightButton,
  Input,
  SearchedSelect,
  SelectOption,
} from './Common/Components';
import {Controller, useForm} from 'react-hook-form';

const TransactionScreen = ({
  navigation,
}: NativeStackScreenProps<RootParamList>) => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState<SelectOption>();
  const [iban, setIban] = useState('');
  const {addTransaction, beneficiaryList} = useTransactions();
  const transactionForm = useForm<TransactionForm.TransactionData>({
    defaultValues: {
      amount: '',
      beneficiary: undefined,
      iban: '',
    },
  });

  const handleTransaction = async() => {
    const isValidData = await transactionForm.trigger();
    if (isValidData) {
      const formData = transactionForm.getValues()
      const accountDetails = {name: formData.beneficiary?.label || '', iban: formData.iban};
      addTransaction(formData.amount, accountDetails);
      navigation.goBack();
    }
  };

  return (
    <View style={{width: '100%', paddingHorizontal: 10}}>
      <Controller
        control={transactionForm.control}
        name="amount"
        rules={{
          required: {
            value: true,
            message: 'Please input Amount',
          },
        }}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <Input
            label={'Amount'}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Enter amount"
            keyboardType={'numeric'}
            errorMessage={!value ? error?.message : ''}
          />
        )}
      />

      <Controller
        control={transactionForm.control}
        name="beneficiary"
        rules={{
          required: {
            value: true,
            message: 'Please choose Beneficiary',
          },
        }}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <SearchedSelect
            label={'Beneficiary'}
            options={beneficiaryList.map(item => ({
              label: item.fullName,
              value: item.iban,
            }))}
            value={value}
            onChange={val => {
              onChange(val);
              transactionForm.setValue('iban', val.value || '');
            }}
            placeholder={'Select'}
            errorMessage={!value || !value.value ? error?.message : ''}
          />
        )}
      />

      <Controller
        control={transactionForm.control}
        name="iban"
        render={({field: {value, onChange, onBlur}}) => (
          <Input
            label={'IBAN of Beneficiary'}
            value={value}
            onChange={onChange}
            readOnly
          />
        )}
      />

      {/* <Button title="Submit Transaction" onPress={handleTransaction} /> */}
      <HightLightButton
        label="Submit Transaction"
        onClickButtonEvent={handleTransaction}
        containerStyle={{
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default TransactionScreen;
