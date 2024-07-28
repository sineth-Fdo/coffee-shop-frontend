import { GET_ALL_ORDERS_URL, CREATE_ORDER_URL, DELETE_ORDER_URL, GET_ORDER_BY_ID_URL } from "../api-urls";

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

export const createOrderAPI = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${CREATE_ORDER_URL}`, {
            method: "POST",
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

export const deleteOrderAPI = async (token : string, orderId : string) => {
    try {
        const response = await fetch(`${BASE_URL}${DELETE_ORDER_URL}${orderId}`, {
            method: "DELETE",
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

export const getOrderByIdAPI = async (token : string, orderId : string) => {
    try {
        const response = await fetch(`${BASE_URL}${GET_ORDER_BY_ID_URL}${orderId}`, {
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

