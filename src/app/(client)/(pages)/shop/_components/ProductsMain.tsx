import { getAllProducts } from "@/src/api/product/productAPI";
import Container from "@/src/components/layout/container";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import ProductCard from "./ProductCard";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    const token = Cookies.get("token") as string;
    try {
      const response = await getAllProducts(token);
      console.log(response);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container>

      <div className="w-full">
          <ProductCard products={products} />
    </div>
    </Container>
  );
};

export default ProductsMain;
