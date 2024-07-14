import { CREATE_CATEGORY_URL, GET_ALL_CATEGORIES_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllCategories = async (token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${GET_ALL_CATEGORIES_URL}`, {
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

export const createCategory = async (name: string, token: string) => {
    try {
        const response = await fetch(`${BASE_URL}${CREATE_CATEGORY_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ name }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
};