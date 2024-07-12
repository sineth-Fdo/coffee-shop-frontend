import { CREATE_PRODUCT_URL, GET_ALL_PRODUCTS_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createProduct = async (name: string, price: number, description: string, category: string, stock: number, image : string, token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${CREATE_PRODUCT_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ name, price, description, category, image, stock }),
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getAllProducts = async (token : string) => {
    try {
        const response = await fetch(`${BASE_URL}${GET_ALL_PRODUCTS_URL}`, {
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