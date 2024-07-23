import api from "./api";

export const createTransaction = async (userId: string, description: string, price: string, type: string, date: Date, category: string) => {
    return await api.post("/transaction", { userId, description, price, type, date, category });
};

export const getAllTransactions = async () => {
    return await api.get("/transaction");
};

export const getAllTransactionsById = async (id: string) => {
    return await api.get(`/transaction/${id}`);
};

export const getAllTransactionsByUserId = async (userId: string) => {
    return await api.get(`/transaction/user/${userId},`);
};

export const deleteTransaction = async (id : string) => {
    return await api.delete(`/transaction/${id}`)
}