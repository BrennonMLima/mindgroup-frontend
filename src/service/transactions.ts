import api from "./api";

export const createTransaction = async ( description: string, price: string, type: string, date: Date, category: string) => {
    return await api.post("/transaction", {description, price, type, date, category });
};

export const getAllTransactions = async () => {
    return await api.get("/transaction");
};

export const deleteTransaction = async (id : string) => {
    return await api.delete(`/transaction/${id}`)
}

export const getTotalDespesas = async () => {
    return await api.get(`/transaction/user/despesas`);
};

export const getTotalReceitas = async () => {
    return await api.get(`/transaction/user/receitas`);
};