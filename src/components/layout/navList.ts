interface INavList {
    title: string,
    link: string
}
const role = localStorage.getItem("role");

export const navList : INavList[] = [
    {
        title: `${role === "admin" ? "Dashboard" : "Home"}`,
        link: `${role === "admin" ? "/dashboard" : "/home"}`
    },
    {
        title: `${role === "admin" ? "Orders" : "shop"}`,
        link: `${role === "admin" ? "/orders" : "/shop"}`
    },
    {
        title: `${role === "admin" ? "" : "Menu"}`,
        link:  `${role === "admin" ? "" : "/home"}`
    },
    {
        title: `${role === "admin" ? "" : "Contact"}`,
        link: `${role === "admin" ? "" : "/contact"}`
    },

]