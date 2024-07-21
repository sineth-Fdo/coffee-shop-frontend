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
import ButtonComp from "@/src/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/src/api/product/productAPI";
import { storage } from "@/src/data/firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"

import { useEffect, useState } from "react";
import { createCategory, getAllCategories } from "@/src/api/product/categoryAPI";
import CoffeeLoader from "@/src/components/ui/CoffeeLoader";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  stock: z.string().min(1),
  image: z.any().optional(),
});


const CreateProductForm = () => {

  const [selectedTheme, setSelectedTheme] = useState("coffee");
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      stock: "",
      image: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setOpen(true);
      const { name, price, description, stock, image } = values;
      const token = Cookies.get("token") as string;
  
      let imageUrl = "";
      if (image && image instanceof File) {
        const imageId = uuidv4() as string;
        imageUrl = `${image.name}${imageId}` as string;
        const storageRef = ref(storage, `products/${imageUrl}`);
        await uploadBytes(storageRef, image);
        
      }
  
      const response = await createProduct(name, parseInt(price), description, selectedTheme, parseInt(stock), imageUrl, token);
  
      if (response.ok) {
        console.log("success");
        form.reset();
        setSelectedTheme("coffee");
        setOpen(false);
      } else {
        console.log("error");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const fetchAllCategories = async () => {
    const token = Cookies.get("token") as string;
    try {
      const response = await getAllCategories(token);
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewCategory = async (name: string) => {
    const token = Cookies.get("token") as string;
    try {
      const response = await createCategory(name, token);
      console.log(response);
      fetchAllCategories(); 
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  // styles
  const inputStyle = "border-gray-300 rounded-md w-[100%]";
  const labelStyle = "text-sm font-semibold text-gray-600";

  return (
    <div className="w-[100%] h-[100%] flex flex-col px-10 sm:px-20 lg:px-40 xl:px-60 justify-center">
      <CoffeeLoader open={open} loadingName = "Uploading . . ."/>
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
          <div className="w-[100%] sm:w-[30%]">
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

          <div className=" flex flex-col gap-3">
                <FormLabel className={labelStyle}>Category</FormLabel>
            <div className="flex flex-col sm:flex-row gap-3">
                  <Select onValueChange={(value) => setSelectedTheme(value)}>
                    <SelectTrigger className="w-[180px] mr-4">
                      <SelectValue placeholder="coffee" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category: any) => (
                        <SelectItem key={category._id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

          <Dialog>
              <DialogTrigger asChild>
                <Button className="" >New Category</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                  <DialogDescription>
                    You can create new category here. Click Add when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2 py-1">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter category name"
                      onChange={(e) => setCategoryName(e.target.value)}
                      value={categoryName}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" onClick={() => {
                      createNewCategory(categoryName);
                      setCategoryName("");
                  }}>
                    Add
                  </Button>
                </DialogFooter>
              </DialogContent>
        </Dialog>
            </div>

            
          </div>
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
          <div className="w-[100%] flex items-center justify-end">
            <ButtonComp
              name="Add Product"
              className="w-[100%] sm:w-[30%] h-10 text-[#000000bc] hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] transition duration-500 ease-in-out mt-7"
              onClick={() => { console.log('clicked') }}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateProductForm;
