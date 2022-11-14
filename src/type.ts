export type newClient = {
    id: number
    name: string
    cpf: string
    bornDate: string
    balance?: accountBalance
}

export type accountBalance = {
    totalBalance: number
    debts: number[]
}