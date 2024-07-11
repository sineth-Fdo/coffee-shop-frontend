import Cookies from "js-cookie";

interface INavList {
    title: string,
    link: string
}
const role = Cookies.get("role");

export const navList : INavList[] = [
    {
        title: `${role === "admin" ? "Dashboard" : "Home"}`,
        link: `${role === "admin" ? "/dashboard" : "/home"}`
    },
    {
        title: `${role === "admin" ? "Products" : "shop"}`,
        link: `${role === "admin" ? "/shop" : "/shop"}`
    },
    {
        title: `${role === "admin" ? "orders" : "Menu"}`,
        link:  `${role === "admin" ? "/orders" : "/home"}`
    },
    {
        title: `${role === "admin" ? "New Product" : "Contact"}`,
        link: `${role === "admin" ? "/create" : "/contact"}`
    },

]