import { StyleProp, ViewStyle } from "react-native"

export type ControlProps<A> = {
    value?: A
    onChange?: (val: A) => void
    onBlur?: () => void
}

export type SelectOption = {
    value: string
    label: string    
}


export type ButtonProps = {
    label: string;
    containerStyle?: StyleProp<ViewStyle>;
    onClickButtonEvent?: () => void
  };