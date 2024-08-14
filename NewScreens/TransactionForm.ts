import { SelectOption } from "../Common/Components"

export namespace TransactionForm {
    export interface TransactionData {
        amount: string
        beneficiary: SelectOption | undefined
        iban: string
    }
}