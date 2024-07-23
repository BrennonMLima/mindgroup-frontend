import api from "./api";

export const login = async (email: string, password: string) => {
    return await api.post("/login", { email, password });
};

export const createUser = async (name: string, email: string, password: string, image: string) => {
    return await api.post("/user", { name, email, password,image });
};

export const getUserById = async () => {
    return await api.get("/user");
};

export const getUserByEmail = async (email: string) => {
    return await api.get(`/user/email/${email}`);
};

export const getUserGroups = async (userId: string) => {
    return await api.get(`/user/${userId}/groups`);
};
