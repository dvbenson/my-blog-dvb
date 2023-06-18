"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { set, useForm } from "react-hook-form";

import Button from "#/src/ui/components/Button";
import GitHubSignInButton from "#/src/ui/components/GitHubSignIn";
import GoogleSignInButton from "#/src/ui/components/GoogleSignIn";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/src/ui/components/Form";
import { Input } from "#/src/ui/components/Input";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username must be at most 20 characters long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long"),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-full w-full">
          <div className="mx-auto flex h-[450px] w-[350px] flex-col items-center justify-between rounded-md bg-slate-200 py-2 shadow-md">
            <div className="flex w-full flex-col justify-between gap-4 p-4">
              <h1 className="text-center text-2xl font-bold">SIGN IN PAGE</h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            className=" bg-white"
                            placeholder="Buzz Lightyear"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="italic">
                          Enter your username
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            className=" bg-white"
                            placeholder="8 characters minimum"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="italic">
                          Enter your password
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    content="Sign In"
                    className="h-8 w-full rounded-md bg-slate-400 shadow-md hover:shadow-lg"
                  />
                </form>
              </Form>
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <GoogleSignInButton
                  className={
                    "h-8 w-full rounded-md bg-slate-400 shadow-md hover:shadow-lg"
                  }
                  content={"Continue with Google"}
                />
                <GitHubSignInButton
                  className={
                    "h-8 w-full rounded-md bg-slate-400 shadow-md hover:shadow-lg"
                  }
                  content={"Continue with GitHub"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
