export type newClient = {
    id: number
    name: string,
    cpf: string,
    bornDate: string,
    balance: number,
    extract: Transactions[]
};

export type Transactions = {
    value: number,
    date: string,
    description: string
}