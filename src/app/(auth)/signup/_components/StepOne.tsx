"use client";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { checkUsername } from "@/utils/checkUsername";

export const usernameValidation = z
  .string()
  .min(6, { message: "Username must be at least 6 char longs" })
  .max(20, { message: "Username cannot exceed 20 characters" })
  .regex(
    /^[a-z0-9]{6,20}$/,
    "Username must not contain special characters or uppercase letters"
  );

const formSchema = z.object({
  username: usernameValidation,
});

export const StepOne = ({ currentStep }: { currentStep: number }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const isAvailable = checkUsername(values.username);
    if (isAvailable) router.push(`?step=${currentStep + 1}`);
  }

  const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-[24px]">
                Create your account
              </FormLabel>
              <FormDescription className="text-[16px] text-[#71717A]">
                Choose a username for your page
              </FormDescription>
              <FormControl>
                <Input placeholder="Enter username here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full ">
          Submit
        </Button>
        <div className="flex gap-4 justify-center">
          <p>Already have an account?</p>
          <Link href="/login" className="text-[#2563EB]">
            Log in
          </Link>
        </div>
      </form>
    </Form>
  );
};
