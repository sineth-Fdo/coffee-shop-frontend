import { getAllProducts } from "@/src/api/product/productAPI";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product: any) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Image
              src={`${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_1}${product.image}${process.env.NEXT_PUBLIC_FIREBASE_IMAGE_URL_2}`}
              alt={product.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsMain;
