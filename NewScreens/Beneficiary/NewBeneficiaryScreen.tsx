import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {useTransactions} from '../../TransactionContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../RootParamList';
import {HightLightButton, Input} from '../../Common/Components';
import {Controller, useForm} from 'react-hook-form';
import {NewBeneficiaryConst, NewBeneficiaryForm} from './NewBeneficiaryForm';



export const NewBeneficiaryScreen = (
  props: NativeStackScreenProps<RootParamList>,
) => {
  const {addBeneficiary, beneficiaryList} = useTransactions();
  const newBeneficiaryForm = useForm<NewBeneficiaryForm.NewBeneficiaryFormData>(
    {
      defaultValues: {
        firstName: '',
        lastName: '',
        iban: '',
      },
      mode: 'onChange'
    }
  );

  function isValidIBANNumber(input: string) {
    const iban = input.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
    if (!code || iban.length !== (NewBeneficiaryConst.CODE_LENGTHS as any)[code[1]]) {
      return false;
    }
    const digits = (code[3] + code[1] + code[2]).replace(
      /[A-Z]/g,
      (letter: string) => {
        return (letter.charCodeAt(0) - 55).toString();
      },
    );
    return mod97(digits) === 1;
  }

  function mod97(digital: number | string) {
    digital = digital.toString();
    let checksum: number | string = digital.slice(0, 2);
    let fragment = "";
    for (let offset = 2; offset < digital.length; offset += 7) {
      fragment = checksum + digital.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
  }

  const onHandleSubmitedBeneficiary = async () => {
    const isValidData = await newBeneficiaryForm.trigger();
    if (isValidData) {
      const formData = newBeneficiaryForm.getValues();
      const fullName = formData.lastName + ' ' + formData.firstName;
      addBeneficiary({
        id: Date.now(),
        fullName: fullName,
        iban: formData.iban,
      });
      props.navigation.goBack();
    }
  };
  return (
    <View style={benStyles.container}>
      <SafeAreaView>
        <View style={benStyles.wrapper}>
          <Controller
            control={newBeneficiaryForm.control}
            name="firstName"
            rules={{
              required: {
                value: true,
                message: 'Please input First Name',
              },
            }}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <Input
                label={'First Name'}
                value={value}
                onChange={onChange}
                errorMessage={!value ? error?.message : ''}
              />
            )}
          />
          <Controller
            control={newBeneficiaryForm.control}
            name="lastName"
            rules={{
              required: {
                value: true,
                message: 'Please input Last Name',
              },
            }}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <Input
                label={'Last Name'}
                value={value}
                onChange={onChange}
                errorMessage={!value ? error?.message : ''}
              />
            )}
          />

          <Controller
            control={newBeneficiaryForm.control}
            name="iban"
            rules={{
              validate: value => {
                if (!value || !value.trim()) {
                  return 'Please input IBAN';
                } else if (!isValidIBANNumber(value)) {
                  return 'IBAN value is not valid. Please input Valid IBan with IBAN rule';
                } else if(beneficiaryList.some((x)=> x.iban === value)) {
                  return 'This IBAN code has already existed in Beneficiary List. Please input another IBAN code'
                } else {
                  return true;
                }
              },
            }}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <Input
                label={'IBAN'}
                value={value}
                onChange={onChange}
                // errorMessage={!value && !isValidIBANNumber(value) ? error?.message: ''}
                errorMessage={error?.message}
              />
            )}
          />
          <HightLightButton
            label="Add New Beneficiary"
            onClickButtonEvent={onHandleSubmitedBeneficiary}
            containerStyle={benStyles.buttonContent}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
const benStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  wrapper: {
    display: 'flex',
    paddingHorizontal: 15,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginTop: 8,
    borderRadius: 3,
  },
  buttonContent: {
    marginTop: 15,
  },
});
