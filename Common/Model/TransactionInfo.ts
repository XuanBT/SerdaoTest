
export type TransactionInfo = {
    id: number
    amount: number
    account: {
        name: string, 
        iban: string
    }
    
}