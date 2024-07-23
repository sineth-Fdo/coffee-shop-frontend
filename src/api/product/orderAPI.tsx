import { GET_ALL_ORDERS_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllOrdersAPI = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${GET_ALL_ORDERS_URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};