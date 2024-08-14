import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonProps } from "./ControlProps";


export const HightLightButton = (props: ButtonProps) => {
  const {label, containerStyle, onClickButtonEvent} = props
  return (
    <TouchableOpacity onPress={()=> onClickButtonEvent && onClickButtonEvent()}>
      <View style={[buttonStyle.container, containerStyle]}>
        <Text style={buttonStyle.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
const buttonStyle = StyleSheet.create({
  container: {
    backgroundColor: "#ed1b2e",
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    // minWidth: 100,
  },
  buttonText: {
    color: '#fff'
  }
});
