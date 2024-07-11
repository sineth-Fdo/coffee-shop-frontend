'use client';

import Cookies from "js-cookie";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/src/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/src/api/product/productAPI";
import { storage } from "@/src/data/firebase/config";
import { ref, uploadBytes } from "firebase/storage";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  category: z.string().min(2),
  stock: z.string().min(1),
  image: z.instanceof(File).optional(),
});

const CreateProductForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      image: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { name, price, description, category, stock, image } = values;
      const token = Cookies.get("token") as string;
  
      let imageUrl = "";
      if (image) {
        const imageId = uuidv4() as string;
        imageUrl = `${image.name}${imageId}` as string;
        const storageRef = ref(storage, `products/${imageUrl}`);
        await uploadBytes(storageRef, image);
        
      }
  
      const response = await createProduct(name, parseInt(price), description, category, parseInt(stock), imageUrl, token);
  
      if (response.ok) {
        console.log("success");
        form.reset();
      } else {
        console.log("error");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  // styles
  const inputStyle = "border-gray-300 rounded-md w-[100%]";
  const labelStyle = "text-sm font-semibold text-gray-600";

  return (
    <div className="w-[100%] h-[100%] flex flex-col px-10 sm:px-20 lg:px-40 xl:px-60 justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <h1 className="text-3xl font-semibold">Add New Product</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" className={inputStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Price</FormLabel>
                <FormControl>
                  <Input placeholder="LKR" type="number" className={inputStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-[30%]">
            <Input type="file" className={inputStyle} onChange={handleFileChange} />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type product description here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Category</FormLabel>
                <FormControl>
                  <Input placeholder="coffee" className={inputStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelStyle}>Stock</FormLabel>
                <FormControl>
                  <Input placeholder="10" type="number" className={inputStyle} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            name="Add Product"
            className="w-[30%] h-10 text-[#000000bc] hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] transition duration-500 ease-in-out mt-7"
            onClick={() => { console.log('clicked') }}
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateProductForm;
