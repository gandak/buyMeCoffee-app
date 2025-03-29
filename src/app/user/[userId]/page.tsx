"use client";

import React from "react";
import Image from "next/image";
import { UserType } from "@/utils/types";
import { useUser } from "@/app/_context/UserContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExpandableText from "@/app/(home)/dashboard/user/[userId]/_components/ExpandableText";
import { Coffee, Heart } from "lucide-react";
import RecentSupporters from "./_components/RecentSupporters";
import { Donations } from "./_components/Donations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const formSchema = z.object({
  donation: z.string({
    message: "Username must be at least 2 characters.",
  }),
  socialMediaURL: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  specialMessage: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const userProfile = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      donation: "",
      socialMediaURL: "",
      specialMessage: "",
    },
  });

  const { user, loggedUser } = useUser() as {
    user: UserType | null;
    loggedUser: string | null;
  };

  if (!user)
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold">User not found!</h2>
        <Link href="/explore">
          <Button variant={"secondary"}>Go back to explore</Button>
        </Link>
      </div>
    );

  const latestDonors = user.receivedDonations
    ? [...user.receivedDonations].reverse()
    : [];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("values: ", values);
  }

  return (
    <div className="flex flex-col gap-6  pt-6 ">
      <div>
        {user?.profile.coverImg ? (
          <Image
            alt="cover"
            src={user?.profile.coverImg || "/placeholder.svg"}
            width={1920}
            height={1080}
            style={{ width: "100vw", height: "320px", objectFit: "cover" }} // For display size
          />
        ) : (
          <div className=" w-screen h-[320px] bg-[#4FBDA1]"></div>
        )}
      </div>
      <div className="flex  gap-4 max-w-[1264px] m-auto w-full items-start absolute mt-60 rounded-md p-6">
        <div className="w-[50%] flex flex-col gap-4">
          <div className="w-full flex flex-col gap-4 bg-white rounded-lg border-1">
            <div className="flex flex-col gap-4 p-6 ">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    alt=""
                    src={user?.profile.avatarImage}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className="font-bold">{user?.profile.name}</h2>
                </div>
                {loggedUser && <Button>Edit page</Button>}
              </div>
              <div className="border-1"></div>
              <div>
                <h3 className="font-bold">About {user.username}</h3>

                <ExpandableText text={user.profile.about} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 bg-white rounded-lg border-1">
            <div className="flex flex-col gap-4 p-6 ">
              <div className="overflow-hidden">
                <h3 className="font-bold">Social media URL</h3>
                <p className="text-wrap">{user.profile.socialMediaURL}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 bg-white rounded-lg border-1">
            <div className="flex flex-col gap-4 p-6 ">
              <h3 className="font-bold">Recent supporters</h3>
              {user.receivedDonations ? (
                <div className="flex gap-4">
                  {/* <h2 className="font-bold text-[14px]">
                    {latestDonors[0].name} bought ${latestDonors[0].amount}
                  </h2>
                  <p className="text-[14px]">
                    {latestDonors[0].specialMessage}
                  </p> */}
                  <RecentSupporters latestDonors={latestDonors} />
                </div>
              ) : (
                <div className="min-h-[140px] flex flex-col border-1 rounded-md justify-center items-center">
                  <Heart color="black" fill="black" />
                  <p>Be the first one to support {user.username}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white w-[50%] p-6 border-1 rounded-md flex flex-col gap-4">
          <h1 className="font-bold text-[24px]">
            Buy {user.username} a Coffee
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="donation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select amount:</FormLabel>
                    <FormControl>
                      <ToggleGroup
                        type="single"
                        className="flex gap-2 "
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <ToggleGroupItem
                          value="1"
                          aria-label="$1"
                          className="h-[40px]  px-4  rounded-md"
                        >
                          <Coffee /> $1
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="2"
                          aria-label="$2"
                          className="h-[40px]  px-4 rounded-md"
                        >
                          <Coffee /> $2
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="5"
                          aria-label="$5"
                          className="h-[40px]  px-4  rounded-md"
                        >
                          <Coffee /> $5
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="10"
                          aria-label="$10"
                          className="h-[40px]  px-4  rounded-md"
                        >
                          <Coffee /> $10
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="socialMediaURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enter BuyMeCoffee or social account URL:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="buymecoffee.com/" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="specialMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please write your message here"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default userProfile;
