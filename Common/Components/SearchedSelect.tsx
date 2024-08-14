import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View, StyleSheet, Text} from 'react-native';
import {ControlProps, SelectOption} from './ControlProps';

type SearchedSelectProps = ControlProps<SelectOption> & {
  label?: string;
  options: SelectOption[];
  maxHeight?: number;
  placeholder?: string;
  errorMessage?: string;
};

export const SearchedSelect = (props: SearchedSelectProps) => {
  const {
    label,
    options,
    maxHeight,
    value,
    onChange,
    placeholder,
    errorMessage,
  } = props;
  return (
    <View style={searchStyles.container}>
      {label && <Text style={searchStyles.labelText}>{label}</Text>}
      <Dropdown
        style={searchStyles.dropdown}
        placeholderStyle={searchStyles.placeholderStyle}
        selectedTextStyle={searchStyles.selectedTextStyle}
        inputSearchStyle={searchStyles.inputSearchStyle}
        iconStyle={searchStyles.iconStyle}
        data={options}
        search
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          onChange && onChange(item);
        }}
      />
      {errorMessage && (
        <Text style={searchStyles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

const searchStyles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 15,
  },
  labelText: {
    color: 'rgb(112, 119, 126)',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdown: {
    // margin: 16,
    height: 40,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  errorText: {
    color: '#ED1B2C',
    fontSize: 11.25,
  },
});
