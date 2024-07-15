import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategories } from "@/src/api/product/categoryAPI";
import {
  getAllProducts,
  getProductByCategory,
} from "@/src/api/product/productAPI";
import Container from "@/src/components/layout/container";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonLoader from "@/src/components/ui/SkeletonLoader";

const ProductsMain = () => {
  const [products, setProducts] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [categories, setCategories] = useState([]);

  const skeletonCount = 12; // Number of SkeletonLoader components to render
  const skeletonArray = Array.from({ length: skeletonCount });


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

  const fetchProductByCategory = async (category: string) => {
    const token = Cookies.get("token") as string;
    try {
      const response = await getProductByCategory(token, category);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCategories = async () => {
    const token = Cookies.get("token") as string;
    try {
      const response = await getAllCategories(token);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategories();

    if (selectedTheme === "all") {
      fetchAllProducts();
    } else {
      fetchProductByCategory(selectedTheme);
    }
  }, [selectedTheme]);

  return (
    <Container>
      <div className=" w-[100%] h-20 flex justify-end items-center py-20">
        <Select onValueChange={(value) => setSelectedTheme(value)}>
          <SelectTrigger className="w-[60%] sm:w-[50%] md:w-[20%] border-[#603809] active:border-none transition duration-150">
            <SelectValue placeholder="all" />
          </SelectTrigger>
          <SelectContent className="bg-[#603809] text-[#fff] border-none ">
            {categories.map((category: any) => (
              <SelectItem key={category._id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full">

            {
                products.length === 0 && (
                  <div className="flex flex-wrap gap-8 w-[100%] justify-center">
                  {skeletonArray.map((_, index) => (
                    <SkeletonLoader key={index} />
                  ))}
              </div>
                )
            }

        <ProductCard products={products} />

      </div>
    </Container>
  );
};

export default ProductsMain;
