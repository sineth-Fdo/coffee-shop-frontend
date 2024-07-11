"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { loginUser } from "@/src/api/auth/authApi";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/src/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(2).max(50),
});

const LoginForm = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    if (!token) {
      console.log("Not authenticated");
      router.push("/login");
    } else {
      if (role === "admin") {
        router.push("/dashboard");
      } else if (role === "customer") {
        router.push("/home");
      }
    }
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    const res = await loginUser(email, password);

    if (res.ok) {
      const data = await res.json();
      Cookies.set("token", data.token, { expires: 10 });
      Cookies.set("role", data.user.role, { expires: 10 });
      console.log("Login successful");

      if (data.user.role === "admin") {
        router.push("/dashboard");
      } else if (data.user.role === "customer") {
        router.push("/home");
      }
    } else {
      alert("Login failed");
    }
  };

  // styles
  const inputStyle = " border-gray-300 rounded-md w-[100%]";
  const labelStyle = "text-sm font-semibold text-gray-600";


  return (
    <div className=" w-[100%] h-[100%] flex flex-col px-10 sm:px-20 lg:px-40 xl:px-60 justify-center">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="text-3xl font-semibold">Login</h1>
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
                        <Input type="password" placeholder="Enter your Password" className={inputStyle} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                  <Button
                      name="Login"
                      className="w-[100%] h-10 text-[#000000bc] hover:bg-[#ffe6bf] bg-[#F9C06A] hover:text-[#000] transition duration-500 ease-in-out mt-7"
                      onClick = {() => {console.log('clicked')}}
                    />
                </form>
            </Form>
              
            <Link href={"/register"}>
              <h1 className="text-sm font-semibold text-[#0063eeb8] hover:text-[#0063ee62] cursor-pointer mt-5">Don&apos;t have an account ?</h1>
            </Link>
   
    </div>
  );
};

export default LoginForm;
