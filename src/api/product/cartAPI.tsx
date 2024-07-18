import { ADD_TO_CART_URL, GET_CART_ITEMS_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const addToCart = async (token: string, product_id: string) => {
    try {
        const response = await fetch(`${BASE_URL}${ADD_TO_CART_URL}${product_id}`, {
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

export const getCartItems = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${GET_CART_ITEMS_URL}`, {
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