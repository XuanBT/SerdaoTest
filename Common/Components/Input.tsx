import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ControlProps} from './ControlProps';

type InputProps = ControlProps<string> & {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  keyboardType?: "numeric"
  readOnly?: boolean
};
export const Input = (props: InputProps) => {
  const {label, value, onChange, placeholder, errorMessage, keyboardType,readOnly} = props;
  return (
    <View style={inputStyles.container}>
      {label && <Text style={inputStyles.labelText}>{label}</Text>}
      <TextInput
        style={inputStyles.textInput}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        readOnly={readOnly}
      />
      {errorMessage && (
        <Text style={inputStyles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};
const inputStyles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 15
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginTop: 8,
    borderRadius: 3,
  },
  labelText: {
    color: 'rgb(112, 119, 126)',
    fontSize: 15,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ED1B2C', 
    fontSize: 11.25
  }
});
