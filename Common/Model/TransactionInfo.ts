
export type TransactionInfo = {
    id: number
    amount: number
    account: {
        name: string, 
        iban: string
    }
    
}

export type BeneficiaryInfo = {
    id: number
    fullName: string
    iban: string
}

export type CodeType = {
    [key: string]: number
  };