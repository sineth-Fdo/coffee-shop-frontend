"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { loginUser, registerUser } from "@/src/api/auth/authApi";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import Link from "next/link";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50).email(),
    password: z.string().min(2).max(50),
    mobile: z
      .string()
      .refine((val) => /^\d{10}$/.test(val), {
        message: "Mobile number must be exactly 10 digits",
      }),
    role: z.any().optional(),
  });

const RegisterForm = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      mobile: "",
      role: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      
      try {
            const { email, password, username, mobile } = values;
            const res = await registerUser(username, email, password, parseInt(mobile, 10), "customer");

            if (res)
            console.log(res)

        }catch (err : any) {
            console.log(err);
        }
        
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    if (!token) {
      console.log("Not authenticated");
      router.push("/register");
    } else {
      if (role === "admin") {
        router.push("/dashboard");
      } else if (role === "customer") {
        router.push("/home");
      }
    }
  });

  // styles
  const inputStyle = "border-gray-300 rounded-md w-[100%]";
  const labelStyle = "text-sm font-semibold text-gray-600";


  return (
    <div className="w-[100%] h-[100%] flex flex-col px-10 sm:px-20 lg:px-40 xl:px-60 justify-center">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <h1 className="text-3xl font-semibold">Register</h1>
                

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyle}>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" className={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyle}>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Email" className={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyle}>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" className={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyle}>Mobile number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="07X-XXXX-XXX" className={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
                  <Button
                      name="Register"
                      className="w-[100%] h-10 text-[#000000bc] hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] transition duration-500 ease-in-out mt-7"
                      onClick={() => {console.log('clicked')}}
                    />
                </form>
            </Form>
              
            <Link href={"/login"}>
              <h1 className="text-sm font-semibold text-[#0063eeb8] hover:text-[#0063ee62] cursor-pointer mt-5">Already have account ?</h1>
            </Link>
   
    </div>
  );
};

export default RegisterForm;
